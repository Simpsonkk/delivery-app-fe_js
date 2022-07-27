import { productService } from '../../shared/productService.js';

class Counter {
  minusEl() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    selectedDishes.forEach((item) => {
      item
        .querySelector('[data-action="minus"]')
        .addEventListener('click', () => {
          const counter = item.querySelector('[data-counter]');
          if (+counter.innerText > 1) {
            counter.innerText = --counter.innerText;
            const idDish = item
              .querySelector('[data-id]')
              .getAttribute('data-id');
            this.calcTotalPrice();
            productService.removeProducts(idDish);
          }
        });
    });
  }

  plusEl() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    selectedDishes.forEach((item) => {
      item
        .querySelector('[data-action="plus"]')
        .addEventListener('click', () => {
          const counter = item.querySelector('[data-counter]');
          counter.innerText = ++counter.innerText;
          const id = item.querySelector('[data-id]').getAttribute('data-id');
          this.calcTotalPrice();
          productService.putProducts(id);
        });
    });
  }

  calcTotalPrice() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    let totalPrice = 0;
    selectedDishes.forEach((dish) => {
      const dishCost = dish.querySelector('.delivery-content__cost').innerHTML;
      const dishPrice = dish.querySelector('[data-counter]').innerHTML;
      const currentPrice = +dishCost * +dishPrice;
      totalPrice += currentPrice;
    });
    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${totalPrice} $`;
  }
}

export const counter = new Counter();
