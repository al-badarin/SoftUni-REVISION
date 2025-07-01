function pirates(input) {
  const cities = {};

  let line = input.shift();
  while (line !== 'Sail') {
    let [name, population, gold] = line.split('||');
    population = Number(population);
    gold = Number(gold);

    if (!cities.hasOwnProperty(name)) {
      cities[name] = { population, gold };
    } else {
      cities[name].population += population;
      cities[name].gold += gold;
    }

    line = input.shift();
  }

  line = input.shift();
  while (line !== 'End') {
    let [command, ...args] = line.split('=>');

    if (command === 'Plunder') {
      const cityName = args[0];
      const peopleKilled = Number(args[1]);
      const goldStolen = Number(args[2]);

      cities[cityName].population -= peopleKilled;
      cities[cityName].gold -= goldStolen;

      console.log(
        `${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`
      );

      if (cities[cityName].population <= 0 || cities[cityName].gold <= 0) {
        console.log(`${cityName} has been wiped off the map!`);
        delete cities[cityName];
      }
    } else if (command === 'Prosper') {
      const cityName = args[0];
      const goldToAdd = Number(args[1]);

      if (goldToAdd < 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
        cities[cityName].gold += goldToAdd;
        console.log(
          `${goldToAdd} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`
        );
      }
    }

    line = input.shift();
  }

  const cityNames = Object.keys(cities);
  const cityCount = cityNames.length;
  if (cityCount === 0) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`
    );

    for (const name of cityNames) {
      const { population, gold } = cities[name];
      console.log(
        `${name} -> Population: ${population} citizens, Gold: ${gold} kg`
      );
    }
  }
}

pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);

pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
