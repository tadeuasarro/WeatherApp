import request from './request';
const weather = (city_name) => {
  async function result () {
    result = [];

    const currentWeather = await request('weather', city_name);
    result.push(currentWeather);

    const weatherForecast = await request('forecast', city_name);
    result.push(weatherForecast);

    return(result);

  }

  return(result());

}

export default weather;
