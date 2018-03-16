const initBar = container => {
  const bar = container.querySelector('.orders__progress-bar');
  const scale = bar.querySelector('.orders__progress-fill');
  const perc = container.querySelector('.orders__progress-perc');

  const percentage = bar.dataset.progress;
  perc.textContent = `${percentage}%`;

  scale.style.backgroundImage = `linear-gradient(to right, red ${percentage}%, rgba(0, 0, 0, 0) ${percentage}%)`;
  perc.style.left = `${percentage}%`;
};

export default initBar;
