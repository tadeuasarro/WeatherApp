const firstRow = (value) => {
  const container = document.createElement('div');
  container.classList.add('border-top', 'mb-3');

  const title = document.createElement('h4');
  title.classList.add('pt-3', 'mb-3');
  title.innerHTML = 'Temperatures';

  container.appendChild(title);

  const row = document.createElement('div');
  row.classList.add('row', 'px-3');

  const valueInfo = [
    { label: 'Feels like:', content: value.main.feels_like },
    { label: 'Temperature:', content: value.main.temp },
    { label: 'Max temp:', content: value.main.temp_max },
    { label: 'Min temp:', content: value.main.temp_min },
  ];

  for (let i = 0; i < valueInfo.length; i += 1) {
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('col-3', 'd-flex', 'justify-content-between', 'py-3', 'border');

    const label = document.createElement('span');
    label.innerHTML = valueInfo[i].label;

    const info = document.createElement('span');
    info.innerHTML = `${valueInfo[i].content}°C`;

    smallContainer.appendChild(label);
    smallContainer.appendChild(info);

    row.appendChild(smallContainer);
  }

  container.appendChild(row);

  return container;
};

export default firstRow;