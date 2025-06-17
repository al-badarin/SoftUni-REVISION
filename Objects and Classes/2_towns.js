function createTown(input) {
  for (let townInfo of input) {
    let townDetails = townInfo.split(' | ');

    let townName = townDetails.shift();
    let latitude = Number(townDetails.shift()).toFixed(2);
    let longitude = Number(townDetails.shift()).toFixed(2);

    let town = {};
    town.town = townName;
    town.latitude = latitude.toString();
    town.longitude = longitude.toString();

    console.log(town);
  }
}

createTown([
  'Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625',
]);
