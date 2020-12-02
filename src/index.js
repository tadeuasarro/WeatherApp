import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import weather from './weather';

const myFunction = () => {

  weather('Limeira').then(function(values){
    const currentWeather = values[0];
    const weatherForecast = values[1];

    /*

    const mainContainer = document.getElementById('main-container');

    const currentContent = document.createElement('p');
    //currentContent.innerHTML = currentWeather;
    console.log(currentWeather);

    const forecastContent = document.createElement('p');
    //forecastContent.innerHTML = weatherForecast;

    //mainContainer.appendChild(currentContent.main);
    //mainContainer.appendChild(forecastContent.main);

    */

  });

}

myFunction();