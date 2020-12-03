const rows = (valueInfo) => {
  const row = document.createElement('div');
  row.classList.add('row', 'px-3');

  for (let i = 0; i < valueInfo.length; i += 1) {
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('col-3', 'd-flex', 'justify-content-between', 'py-3', 'border');

    const label = document.createElement('span');
    label.innerHTML = valueInfo[i].label;

    const info = document.createElement('span');
    info.innerHTML = valueInfo[i].content;

    smallContainer.appendChild(label);
    smallContainer.appendChild(info);

    row.appendChild(smallContainer);
  }

  return row;

}

export default rows;