import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import weather from './weather';
import weatherContainer from './weather_container';

const myFunction = () => {
  const searchButton = document.getElementById('search_button');

  searchButton.addEventListener('click', () => {
    const searchStart = document.getElementById('search_input').value;

    weather(searchStart).then((value) => {
      const mainContainer = document.getElementById('main-container');
      mainContainer.innerHTML = '';

      mainContainer.appendChild(weatherContainer(value));

      return true;
    });
  });
};

myFunction();