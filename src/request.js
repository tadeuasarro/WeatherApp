const request = async (key, city_name) => {
  const response = await fetch("http://api.openweathermap.org/data/2.5/" + key + "?q=" + city_name + "&units=metric&appid=873aa78430c524e7ef6505af11e25a57&q=limeira", {mode: 'cors'});

  const result = await response.json();

  return(result);

}

export default request;