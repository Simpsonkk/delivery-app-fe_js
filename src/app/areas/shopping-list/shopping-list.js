import '/src/assets/styles/style.scss';
import { productService } from '../../shared/productService.js';
import { productsApiService } from './../../core/services/productsApiService.js';

class Products {
  handleSetLocationStorage(event) {
    productService.putProducts(event.target.getAttribute('data-id'));
    event.target.innerHTML = 'Added';
    event.target.setAttribute('disabled', 'disabled');
  }

  render(products) {
    const productsStore = productService.getProducts();
    let htmlCatalog = '';
    let activeTextButton = '';
    products.forEach(({ productId, name, price, img }) => {
      if (productsStore.indexOf(productId) === -1) {
        activeTextButton = 'Add to Cart';
      } else {
        activeTextButton = 'Added';
        var disabledButton = 'disabled="disabled"';
      }

      htmlCatalog += `
      <div class="delivery-content__dish row col-4 justify-content-center">
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
          productsPage.handleSetLocationStorage
        );
      });
  }

  async getShops() {
    const shops = await productsApiService.getShopsNames();
    let shopsBtns = '';
    shops.forEach(({ shop, shopId }) => {
      shopsBtns += `
         <div class="w-100"></div>
          <button id="shopButton-${shopId}" type="button" class="delivery-content__shop-button btn btn-outline-warning col mb-2" data-id="${shopId}">${shop}</button>
          `;
    });
    document.querySelector('.delivery-content__shops').innerHTML = shopsBtns;
    const elements = document.querySelectorAll('button[id^="shopButton-"]');
    elements.forEach((element) => {
      const id = element.getAttribute('data-id');
      element.addEventListener('click', async () => {
        let products = await productsApiService.getProducts(id);
        this.render(products);
        localStorage.clear();
        localStorage.setItem('shopId', JSON.stringify(id));
      });
    });
  }
}

export const productsPage = new Products();
productsPage.getShops();

