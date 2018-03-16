import initButtons from './buttons';
import initBar from './progress';

document.addEventListener('DOMContentLoaded', () => {
  const cartListItems = document.querySelectorAll('.cart__item');
  const orders = document.querySelectorAll('.orders__item');

  if (cartListItems) {
    for (const listItem of cartListItems) {
      initButtons(listItem);
    }
  }

  if (orders) {
    for (const order of orders) {
      initBar(order);
    }
  }
});
