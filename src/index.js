import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';
import './styles.css';
import weather from './weather/weather';
import weatherContainer from './weather/weather_container';

const myFunction = () => {
  const searchButton = document.getElementById('search_button');

  searchButton.addEventListener('click', () => {
    const searchStart = document.getElementById('search_input').value;

    weather(searchStart)
      .then((value) => {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';

        mainContainer.appendChild(weatherContainer(value));

        return true;

      })
      .catch(() => {
        const mainContainer = document.getElementById('main-container');

        const errorMessage = document.createElement('p');
        errorMessage.classList.add('alert', 'alert-danger', 'h3', 'text-center');
        errorMessage.innerHTML = 'Invalid city, please try again!';

        mainContainer.appendChild(errorMessage);
      });

  });

};


myFunction();