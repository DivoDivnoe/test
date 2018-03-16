const initCounter = container => {
  const decrementBtn = container.querySelector('.cart__quantity-btn--decrease');
  const incrementBtn = container.querySelector('.cart__quantity-btn--increase');
  const quantityNode = container.querySelector('.cart__quantity-num');

  let count = +quantityNode.textContent;

  const disableButton = button => {
    button.classList.add('cart__quantity-btn--disabled');
    button.disabled = true;
  };
  const enableButton = button => {
    button.classList.remove('cart__quantity-btn--disabled');
    button.disabled = false;
  };

  decrementBtn.addEventListener('click', evt => {
    count--;
    quantityNode.textContent = count;

    if (count === 1) disableButton(evt.target);
  });

  incrementBtn.addEventListener('click', evt => {
    if (count === 1) enableButton(decrementBtn);

    count++;
    quantityNode.textContent = count;
  });

  if (count === 1) disableButton(decrementBtn);
};

const initRemoveButton = container => {
  const removeButton = container.querySelector('.cart__remove-btn');

  removeButton.addEventListener('click', evt => {
    evt.target.textContent = container.classList.contains('cart__item--removed')
      ? 'Удалить'
      : 'Вернуть';

    container.classList.toggle('cart__item--removed');
  });
};

const initButtons = container => {
  initCounter(container);
  initRemoveButton(container);
};

export default initButtons;
