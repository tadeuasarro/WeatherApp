import firstRow from './first_row';
import secondRow from './second_row';

const weatherContainer = (value) => {

  const containerSuper = document.createElement('div');
  containerSuper.classList.add('border', 'rounded', 'p-3', 'text-dark');

  const container = document.createElement('div');
  container.classList.add('d-flex', 'mb-3');

  const city = document.createElement('h2');
  city.innerHTML = "City: " + value.name;

  const country = document.createElement('h3');
  country.classList.add('d-flex', 'text-secondary', 'align-items-end', 'ml-3')
  country.innerHTML = "Country: " + value.sys.country;

  container.appendChild(city);
  container.appendChild(country);

  const infoContainer = document.createElement('div');
  infoContainer.appendChild(firstRow(value));
  infoContainer.appendChild(secondRow(value));

  containerSuper.appendChild(container);
  containerSuper.appendChild(infoContainer);

  return containerSuper;

}

export default weatherContainer;