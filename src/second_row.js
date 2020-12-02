const secondRow = (value) => {
  const container = document.createElement('div');
  container.classList.add('border-top');

  const title = document.createElement('h4');
  title.classList.add('pt-3', 'mb-3');
  title.innerHTML = 'Weather';

  container.appendChild(title);

  const row = document.createElement('div');
  row.classList.add('row', 'px-3');

  const valueInfo = [
    { label: 'Situation:', content: value.weather[0].main },
    { label: 'Description:', content: value.weather[0].description },
    { label: 'Humidity:', content: `${value.main.humidity}%` },
    { label: 'Wind speed:', content: `${value.wind.speed}m/s` },
  ];

  for (let i = 0; i < valueInfo.length; i += 1) {
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('col-3', 'd-flex', 'justify-content-between', 'py-3', 'border');

    const label = document.createElement('span');
    label.innerHTML = valueInfo[i].label;

    const info = document.createElement('span');
    info.innerHTML = valueInfo[i].content;

    smallContainer.appendChild(label);
    smallContainer.appendChild(info);

    row.appendChild(smallContainer);
  }

  container.appendChild(row);

  return container;
};

export default secondRow;