function carFactory(orderCar) {
  let resultCars = {};
  let engine = {};
  let carriage = {};

  resultCars.model = orderCar.model;

  if (orderCar.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (orderCar.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else if (orderCar.power <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }

  carriage.type = orderCar.carriage;
  carriage.color = orderCar.color;

  if (orderCar.wheelsize % 2 === 0) {
    orderCar.wheelsize--;
  }

  resultCars.engine = engine;
  resultCars.carriage = carriage;
  resultCars.wheels = [
    orderCar.wheelsize,
    orderCar.wheelsize,
    orderCar.wheelsize,
    orderCar.wheelsize,
  ];

  return resultCars;
}

const orderCar = {
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
};

console.log(carFactory(orderCar));
