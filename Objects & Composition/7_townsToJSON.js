function townsToJSON(input) {
  const townsArr = [];

  for (let info of input.slice(1)) {
    let [empty, town, latitude, longitude] = info.split(/\s*\|\s*/);
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    const townObj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };

    townsArr.push(townObj);
  }

  console.log(JSON.stringify(townsArr));
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
