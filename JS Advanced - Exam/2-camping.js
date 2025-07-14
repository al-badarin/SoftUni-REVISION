class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw Error('Unsuccessful registration at the camp.');
    }

    if (this.listOfParticipants.find((p) => p.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return 'The money is not enough to pay the stay at the camp.';
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    if (!participant) {
      throw Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      (p) => p.name !== name
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let player1 = this.listOfParticipants.find((x) => x.name == participant1);

    if (!player1) {
      throw Error(`Invalid entered name/s.`);
    }

    if (typeOfGame == 'Battleship') {
      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
    } else if (typeOfGame == 'WaterBalloonFights') {
      let nameOfWinner = '';
      let player2 = this.listOfParticipants.find((x) => x.name == participant2);

      if (!player2) {
        throw Error(`Invalid entered name/s.`);
      }

      if (player1.condition != player2.condition) {
        throw Error(`Choose players with equal condition.`);
      }

      if (player1.power > player2.power) {
        player1.wins++;
        nameOfWinner = player1.name;
      } else if (player2.power > player1.power) {
        player2.wins++;
        nameOfWinner = player2.name;
      } else {
        return `There is no winner.`;
      }

      return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`;
    }
  }

  toString() {
    const result = [];
    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );

    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((p) => {
        result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
      });

    return result.join('\n');
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
