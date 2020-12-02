const weather = (cityName) => {
  async function result() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=873aa78430c524e7ef6505af11e25a57`, { mode: 'cors' });

    const result = await response.json();

    return (result);
  }

  return (result());
};

export default weather;
