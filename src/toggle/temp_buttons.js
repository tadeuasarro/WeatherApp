import temperatures from './temperatures';

const tempButtons = (value) => {
  const scale = document.createElement('div');
  scale.classList.add('d-flex');

  const fahrenheit = document.createElement('div');
  fahrenheit.classList.add('btn', 'btn-outline-dark');
  fahrenheit.innerHTML = 'Fahrenheit';
  fahrenheit.addEventListener('click', () => {
    const reset = document.getElementById('temp_container');
    reset.innerHTML = '';
    reset.appendChild(temperatures(value, true));
  });

  const celsius = document.createElement('div');
  celsius.classList.add('btn', 'btn-outline-dark', 'mr-3');
  celsius.innerHTML = 'Celsius';
  celsius.addEventListener('click', () => {
    const reset = document.getElementById('temp_container');
    reset.innerHTML = '';
    reset.appendChild(temperatures(value, false));
  });

  scale.appendChild(celsius);
  scale.appendChild(fahrenheit);

  return scale;
};

export default tempButtons;