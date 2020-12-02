import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import weather from './weather';
import weatherContainer from './weather_container';

const myFunction = () => {

  weather('Limeira').then(function(value){
    const mainContainer = document.getElementById('main-container');

    mainContainer.appendChild(weatherContainer(value));
    console.log(value);

    return true;

  });

}

myFunction();