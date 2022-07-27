import '/src/assets/styles/style.scss';
import { counter } from './counter.js';
import { productService } from '../../shared/productService.js';
import { productsApiService } from './../../core/services/productsApiService.js';

class ShoppingCartPage {
  initAddEventListeners() {
    document
      .querySelectorAll('.delivery-content__remove-button')
      .forEach((removeProductButton) => {
        removeProductButton.addEventListener(
          'click',
          shoppingCartPage.removeDish
        );
      });

    document
      .getElementById('submit')
      .addEventListener('click', shoppingCartPage.setOrder);
  }

  render(shopId) {
    const products = productService.getProducts();
    let selectedProductsCount = {};
    [...new Set(products)].forEach((product) => {
      selectedProductsCount[product] = products.filter(
        (x) => x === product
      ).length;
    });
    let htmlCatalog = '';
    let sumCatalog = 0;
    shopId.forEach(({ productId, name, price, img }) => {
      const quantity = selectedProductsCount[productId];
      if (products.indexOf(JSON.stringify(productId)) !== -1) {
        htmlCatalog += `
        <div class="delivery-content__dish row col-4 justify-content-center">
          <img class="delivery-content__img col-auto" src=${img}>
          <div class="w-100"></div>
          <p class="delivery-content__name col-auto">${name}</p>
          <p class="delivery-content__cost col-auto p-0">${price}</p>
          <p class="delivery-content__currency col-auto p-0">$</p>
          <div class="w-100"></div>
          <button type="button" class="delivery-content__remove-button col-2 p-0 btn 
          btn-outline-success" data-id=${productId}>x</button>
          <div class="delivery-content__counter-wrapper col-6 ms-2">
            <div class="delivery-content__control" data-action="minus">-</div>
            <div id="counter" class="delivery-content__current" data-counter>${quantity}</div>
            <div class="delivery-content__control" data-action="plus">+</div>
          </div>
        </div>
        `;
        sumCatalog += price * quantity;
      }
    });
    document.getElementById('selectedDishes').innerHTML = htmlCatalog;
    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${sumCatalog} $`;
    this.initAddEventListeners();
    counter.plusEl();
    counter.minusEl();
  }

  async removeDish(event) {
    productService.removeAllProducts(event.target.getAttribute('data-id'));
    const shopName = localStorage.getItem('shopId');
    const removesProducts = await productsApiService.getProducts(shopName);
    shoppingCartPage.render(removesProducts);
  }

  sumTotal() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');

    var totalPrice = 0;
    selectedDishes.forEach((item) => {
      const quantityEl = item.querySelector(
        '.delivery-content__current'
      ).textContent;
      const priceEl = item.querySelector('.delivery-content__cost').textContent;
      const currentPrice = quantityEl * priceEl;
      totalPrice += currentPrice;
    });

    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${totalPrice} $`;
  }
  async setOrder() {
    let productsCount = [];
    const shopName = localStorage.getItem('shopId');
    const list = await productsApiService.getProducts(shopName);
    const totalPrice = document
      .getElementById('totalPrice')
      .innerHTML.split('Total price: ')
      .join('');
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPhone = document.getElementById('userPhone').value;
    const userAddress = document.getElementById('userAddress').value;
    document.querySelectorAll('.delivery-content__current').forEach((btn) => {
      productsCount.push(btn.textContent);
    });
    list.length = productsCount.length;

    const dishesNameAndQuantity = list.reduce((acc, el, i) => {
      acc.push(el.name, productsCount[i]);
      return acc;
    }, []);
    const shops = await productsApiService.getShopsNames();
    const selectedShopName = shops
      .filter((el) => JSON.parse(shopName).includes(el.shopId))
      .map((el) => el.shop);
    const order = {
      shop: selectedShopName.join(''),
      dishesNameAndQuantity: dishesNameAndQuantity,
      totalPrice: totalPrice,
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userAddress: userAddress,
    };
    localStorage.clear();
    document.getElementById('selectedDishes').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = 'Total price: 0 $';
    document
      .querySelectorAll('.shopping-cart__input')
      .forEach((userDatainput) => {
        userDatainput.value = '';
      });
    await productsApiService.sendOrder(order);
    alert('Your order has been sent!');
  }

  async productsInit() {
    const selectedShop = localStorage.getItem('shopId');
    if (selectedShop) {
      const products = await productsApiService.getProducts(selectedShop);
      this.render(products);
    }
  }
}

export const shoppingCartPage = new ShoppingCartPage();
shoppingCartPage.productsInit();
