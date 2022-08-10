import '/src/assets/styles/style.scss';
import { counter } from './counter.js';
import { productService } from '../../core/services/productService.js';
import { deliveryApiService } from '../../core/services/deliveryApiService.js';

class ShoppingCart {
  initAddEventListeners() {
    document
      .querySelectorAll('.delivery-content__remove-button')
      .forEach((removeProductButton) => {
        removeProductButton.addEventListener(
          'click',
          shoppingCart.removeproduct
        );
      });

    document
      .getElementById('submit')
      .addEventListener('click', shoppingCart.setOrder);
  }

  render(products) {
    const selectedProducts = productService.getSelectedProductIds();
    let selectedProductsCount = {};
    [...new Set(products)].forEach((product) => {
      selectedProductsCount[product] = products.filter(
        (x) => x === product
      ).length;
    });

    let htmlCatalog = '';
    let totalPrice = 0;
    selectedProducts.forEach(({ productId, name, price, img }) => {
      if (products.indexOf(JSON.stringify(productId)) !== -1) {
        const quantity = selectedProductsCount[productId];

        htmlCatalog += `
        <div class="delivery-content__product row col-4 justify-content-center">
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
        totalPrice += price * quantity;
      }
    });
    document.getElementById('selectedproducts').innerHTML = htmlCatalog;
    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${totalPrice} $`;
    this.initAddEventListeners();
    counter.increaseProduct();
    counter.decreaseProduct();
  }

  async removeproduct(event) {
    productService.removeSelectedProductId(event.target.getAttribute('data-id'));
    const shopName = localStorage.getItem('products');
    const removesProducts = await deliveryApiService.getProducts(shopName);
    shoppingCart.render(removesProducts);
  }

  sumTotal() {
    const selectedproducts = document.querySelectorAll(
      '.delivery-content__product'
    );

    var totalPrice = 0;
    selectedproducts.forEach((item) => {
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
    const shopName = localStorage.getItem('products');
    const list = await deliveryApiService.getProducts(shopName);
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

    const productsNameAndQuantity = list.reduce((acc, el, i) => {
      acc.push(el.name, productsCount[i]);
      return acc;
    }, []);
    const shops = await deliveryApiService.getShopsNames();
    const selectedShopName = shops
      .filter((el) => JSON.parse(shopName).includes(el.products))
      .map((el) => el.shop);
    const order = {
      shop: selectedShopName.join(''),
      productsNameAndQuantity: productsNameAndQuantity,
      totalPrice: totalPrice,
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userAddress: userAddress,
    };
    localStorage.clear();
    document.getElementById('selectedproducts').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = 'Total price: 0 $';
    document
      .querySelectorAll('.shopping-cart__input')
      .forEach((userDatainput) => {
        userDatainput.value = '';
      });
    await deliveryApiService.sendOrder(order);
    alert('Your order has been sent!');
  }

  async productsInit() {
    const selectedShop = localStorage.getItem('products');
    if (!selectedShop) return;

    const products = await deliveryApiService.getProducts(selectedShop);
    this.render(products);
  }
}

export const shoppingCart = new ShoppingCart();
shoppingCart.productsInit();
