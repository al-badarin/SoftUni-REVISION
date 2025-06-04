function townInfo(town, population, area) {
  if (town.length >= 3 && population > 0 && area > 0) {
    console.log(
      `Town ${town} has population of ${population} and area ${area} square km.`
    );
  } else {
    console.log('Incorrect data!');
  }
}

townInfo('Sofia', 1286383, 492);
