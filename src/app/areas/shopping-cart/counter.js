import { productService } from '../../core/services/productService.js';

class ProductCounter {
  decreaseProduct() {
    const selectedproducts = document.querySelectorAll(
      '.delivery-content__product'
    );
    selectedproducts.forEach((product) => {
      product
        .querySelector('[data-action="minus"]')
        .addEventListener('click', () => {
          const counter = product.querySelector('[data-counter]');
          if (+counter.innerText === 1) return;

          counter.innerText = --counter.innerText;
          const idproduct = product
            .querySelector('[data-id]')
            .getAttribute('data-id');
          this.calcTotalPrice();
          productService.decreaseByOneSelectedProductId(idproduct);
        });
    });
  }

  increaseProduct() {
    const selectedproducts = document.querySelectorAll(
      '.delivery-content__product'
    );
    selectedproducts.forEach((product) => {
      product
        .querySelector('[data-action="plus"]')
        .addEventListener('click', () => {
          const productQuantity = product.querySelector('[data-counter]');
          productQuantity.innerText = ++counter.innerText;
          const id = product.querySelector('[data-id]').getAttribute('data-id');
          this.calcTotalPrice();
          productService.setSelectedProductIds(id);
        });
    });
  }

  calcTotalPrice() {
    const selectedproducts = document.querySelectorAll(
      '.delivery-content__product'
    );
    let totalPrice = 0;
    selectedproducts.forEach((product) => {
      const productPrice = product.querySelector(
        '.delivery-content__cost'
      ).innerHTML;
      const productCount = product.querySelector('[data-counter]').innerHTML;
      const productCost = +productPrice * +productCount;
      totalPrice += productCost;
    });
    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${totalPrice} $`;
  }
}

export const counter = new ProductCounter();
