import temperatures from '../toggle/temperatures';
import tempButtons from '../toggle/temp_buttons';

const firstRow = (value) => {
  const container = document.createElement('div');
  container.classList.add('border-top', 'mb-3');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('pt-3', 'mb-3', 'd-flex', 'justify-content-between');

  const title = document.createElement('h4');
  title.innerHTML = 'Temperatures';

  titleContainer.appendChild(title);
  titleContainer.appendChild(tempButtons(value));
  container.appendChild(titleContainer);

  const tempContainer = document.createElement('div');
  tempContainer.id = 'temp_container';

  tempContainer.appendChild(temperatures(value, false));

  container.appendChild(tempContainer);

  return container;
};

export default firstRow;