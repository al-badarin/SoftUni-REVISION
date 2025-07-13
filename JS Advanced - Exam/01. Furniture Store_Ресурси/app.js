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

    if (!model || !description) return;
    if (year <= 0 || price <= 0) return;

    let furnitureTrInfoElement = document.createElement('tr');
    furnitureTrInfoElement.classList.add('info');

    let furnitureTdName = document.createElement('td');
    furnitureTdName.textContent = model;

    let furnitureTdPrice = document.createElement('td');
    furnitureTdPrice.textContent = price.toFixed(2);

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

    let furnitureTrHideElement = document.createElement('tr');
    furnitureTrHideElement.classList.add('hide');
    furnitureTrHideElement.style.display = 'none';

    let furnitureYearTdElement = document.createElement('td');
    furnitureYearTdElement.textContent = `Year: ${year}`;
    furnitureTrHideElement.appendChild(furnitureYearTdElement);

    let furnitureDescriptionTdElement = document.createElement('td');
    furnitureDescriptionTdElement.colSpan = 3;
    furnitureDescriptionTdElement.textContent = `Description: ${description}`;
    furnitureTrHideElement.appendChild(furnitureDescriptionTdElement);

    furnitureList.appendChild(furnitureTrInfoElement);
    furnitureList.appendChild(furnitureTrHideElement);

    moreInfoBtn.addEventListener('click', (e) => {
      if (e.currentTarget.textContent == 'More Info') {
        furnitureTrHideElement.style.display = 'contents';
        e.currentTarget.textContent = 'Less Info';
      } else {
        furnitureTrHideElement.style.display = 'none';
        e.currentTarget.textContent = 'More Info';
      }
    });

    let totalPriceElement = document.querySelector('.total-price');
    buyBtn.addEventListener('click', (e) => {
      let currentTotalPrice = Number(totalPriceElement.textContent);
      let totalPrice = currentTotalPrice + price;
      totalPriceElement.textContent = totalPrice.toFixed(2);

      furnitureTrInfoElement.remove();
      furnitureTrHideElement.remove();
    });
  });
}
