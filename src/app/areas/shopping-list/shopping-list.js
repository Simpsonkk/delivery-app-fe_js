import '/src/assets/styles/style.scss';
import { productService } from '../../core/services/productService.js';
import { deliveryApiService } from '../../core/services/deliveryApiService.js';

class ShoppingList {
  handleSetLocationStorage(event) {
    productService.setSelectedProductIds(event.target.getAttribute('data-id'));
    event.target.innerHTML = 'Added';
    event.target.setAttribute('disabled', 'disabled');
  }

  render(products) {
    const selectedProducts = productService.getSelectedProductIds();
    let htmlCatalog = '';
    let activeTextButton = '';
    products.forEach(({ productId, name, price, img }) => {
      let disabledButton = '';
      if (selectedProducts.indexOf(productId) === -1) {
        activeTextButton = 'Add to Cart';
      } else {
        activeTextButton = 'Added';
        disabledButton = 'disabled="disabled"';
      }

      htmlCatalog += `
      <div class="delivery-content__product row col-4 justify-content-center">
        <img class="delivery-content__img col-auto" src=${img}>
        <div class="w-100"></div>
        <p class="delivery-content__name col-auto">${name}</p>
        <p class="delivery-content__cost col-auto">${price} $</p>
        <div class="w-100"></div>
        <button type="button" class="delivery-content__buy-button col-6 btn 
        btn-outline-success" data-id=${productId} ${disabledButton}>${activeTextButton}</button>
      </div>
      `;
    });
    const html = `
    <div class="delivery-content__shop-menu row ms-1 p-0 pb-1">
      ${htmlCatalog}
    </div>
    `;

    document.getElementById('allMenuContainer').innerHTML = html;
    this.initAddEventListeners();
  }

  initAddEventListeners() {
    document
      .querySelectorAll('.delivery-content__buy-button')
      .forEach((buyProductBtn) => {
        buyProductBtn.addEventListener(
          'click',
          shoppingList.handleSetLocationStorage
        );
      });
  }

  async renderShopBtns() {
    const shops = await deliveryApiService.getShop();
    let shopBtnsToRender = '';
    shops.forEach(({ shop, shopId }) => {
      shopBtnsToRender += `
         <div class="w-100"></div>
          <button id="shopButton-${shopId}" 
                  type="button" 
                  class="delivery-content__shop-button btn btn-outline-warning col mb-2" 
                  data-id="${shopId}"
          >${shop}</button>
          `;
    });
    document.querySelector('.delivery-content__shops').innerHTML =
      shopBtnsToRender;
    this.renderShopProducts();
  }

  renderShopProducts() {
    const shopBtns = document.querySelectorAll('button[id^="shopButton-"]');
    shopBtns.forEach((shopBtn) => {
      const shopId = shopBtn.getAttribute('data-id');
      shopBtn.addEventListener('click', async () => {
        let products = await deliveryApiService.getProducts(shopId);
        this.render(products);
        localStorage.clear();
        localStorage.setItem('shopId', JSON.stringify(shopId));
      });
    });
  }
}

const shoppingList = new ShoppingList();
shoppingList.renderShopBtns();
