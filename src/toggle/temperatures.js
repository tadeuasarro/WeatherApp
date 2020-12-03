import rows from '../rows/rows';

const temperatures = (value, key) => {
  let valueInfo;

  if (key) {
    valueInfo = [
      { label: 'Feels like:', content: `${((value.main.feels_like * 1.8) + 32).toFixed(1)}°F` },
      { label: 'Temperature:', content: `${((value.main.temp * 1.8) + 32).toFixed(1)}°F` },
      { label: 'Max temp:', content: `${((value.main.temp_max * 1.8) + 32).toFixed(1)}°F` },
      { label: 'Min temp:', content: `${((value.main.temp_min * 1.8) + 32).toFixed(1)}°F` },
    ];
  } else {
    valueInfo = [
      { label: 'Feels like:', content: `${value.main.feels_like.toFixed(1)}°C` },
      { label: 'Temperature:', content: `${value.main.temp.toFixed(1)}°C` },
      { label: 'Max temp:', content: `${value.main.temp_max.toFixed(1)}°C` },
      { label: 'Min temp:', content: `${value.main.temp_min.toFixed(1)}°C` },
    ];
  }

  return rows(valueInfo);
};

export default temperatures;