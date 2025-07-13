class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error('Unsuccessful registration at the camp.');
    }

    if (this.listOfParticipants.includes(name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return 'The money is not enough to pay the stay at the camp.';
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    //todo
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    //todo
  }

  toString() {
    //todo
  }
}

const summerCamp = new SummerCamp(
  'Jane Austen',
  'Pancharevo Sofia 1137, Bulgaria'
);

console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 200));
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.registerParticipant('Leila Wolfe', 'childd', 200));
