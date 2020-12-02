const firstRow = (value) => {

  const container = document.createElement('div');
  container.classList.add('border-top', 'mb-3');

  const title = document.createElement('h4');
  title.classList.add('pt-3');
  title.innerHTML = 'Temperatures';

  const row = document.createElement('h4');
  row.classList.add('row');

  const valueInfo = [
    ['Feels like:', value.main.feels_like],
    ['Temperature:', value.main.temp],
    ['Max temp:', value.main.temp_max],
    ['Min temp:', value.main.temp_min],
  ]

  container.appendChild(title);

  return container;

}

export default firstRow;