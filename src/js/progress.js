const initBar = container => {
  const bar = container.querySelector('.orders__progress-bar');
  const scale = bar.querySelector('.orders__progress-fill');
  const perc = container.querySelector('.orders__progress-perc');

  const renderBar = percentage => {
    perc.textContent = `${percentage}%`;

    scale.style.backgroundImage = `linear-gradient(to right, red ${percentage}%, rgba(0, 0, 0, 0) ${percentage}%)`;
    perc.style.left = `${percentage}%`;
  };

  const mutationHandler = () => renderBar(bar.dataset.progress);

  const observer = new MutationObserver(mutationHandler);
  observer.observe(bar, {
    attributes: true,
    attributeFilter: ['data-progress']
  });

  mutationHandler();
};

export default initBar;
