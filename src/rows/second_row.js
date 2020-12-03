import rows from './rows';

const secondRow = (value) => {
  const container = document.createElement('div');
  container.classList.add('border-top');

  const title = document.createElement('h4');
  title.classList.add('pt-3', 'mb-3');
  title.innerHTML = 'Weather';

  container.appendChild(title);

  const valueInfo = [
    { label: 'Situation:', content: value.weather[0].main },
    { label: 'Description:', content: value.weather[0].description },
    { label: 'Humidity:', content: `${value.main.humidity}%` },
    { label: 'Wind speed:', content: `${value.wind.speed}m/s` },
  ];

  container.appendChild(rows(valueInfo));

  return container;
};

export default secondRow;