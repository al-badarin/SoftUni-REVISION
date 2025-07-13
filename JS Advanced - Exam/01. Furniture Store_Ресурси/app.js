window.addEventListener('load', solve);

function solve() {
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let descriptionInputElement = document.getElementById('description');
  let priceInputElement = document.getElementById('price');
  let furnitureList = document.getElementById('furniture-list');
  let addBtn = document.getElementById('add');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let model = modelInputElement.value;
    let description = descriptionInputElement.value;
    let year = Number(yearInputElement.value);
    let price = Number(priceInputElement.value);

    modelInputElement.value = '';
    descriptionInputElement.value = '';
    yearInputElement.value = '';
    priceInputElement.value = '';

    if (model && description && year > 0 && price > 0) {
      let furnitureTrInfoElement = document.createElement('tr');
      furnitureTrInfoElement.classList.add('info');

      let furnitureTdName = document.createElement('td');
      furnitureTdName.textContent = model;

      let furnitureTdPrice = document.createElement('td');
      furnitureTdPrice.textContent = price;

      let furnitureTdBtns = document.createElement('td');
      let moreInfoBtn = document.createElement('button');
      moreInfoBtn.classList.add('moreBtn');
      moreInfoBtn.textContent = 'More Info';
      furnitureTdBtns.appendChild(moreInfoBtn);

      let buyBtn = document.createElement('button');
      buyBtn.classList.add('buyBtn');
      buyBtn.textContent = 'Buy it';
      furnitureTdBtns.appendChild(buyBtn);

      furnitureTrInfoElement.appendChild(furnitureTdName);
      furnitureTrInfoElement.appendChild(furnitureTdPrice);
      furnitureTrInfoElement.appendChild(furnitureTdBtns);

}
