const secondRow = (value) => {

  const container = document.createElement('div');
  container.classList.add('border-top'  );

  const title = document.createElement('h4');
  title.classList.add('pt-3', 'mb-3');
  title.innerHTML = 'Weather';

  container.appendChild(title);

  const row = document.createElement('div');
  row.classList.add('row', 'px-3');

  const valueInfo = [
    ['Situation:', value.weather[0].main],
    ['Description:', value.weather[0].description],
    ['Humidity:', value.main.humidity + '%'],
    ['Wind speed:', value.wind.speed + 'm/s']
  ]

  for(let i = 0; i < valueInfo.length; i++){
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('col-3', 'd-flex', 'justify-content-between', 'py-3', 'border');

    const label = document.createElement('span');
    label.innerHTML = valueInfo[i][0];

    const info = document.createElement('span');
    info.innerHTML = valueInfo[i][1];

    smallContainer.appendChild(label);
    smallContainer.appendChild(info);

    row.appendChild(smallContainer);
  }

  container.appendChild(row);

  return container;

}

export default secondRow;