function ticketSorter(tickets, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let result = [];

  tickets.map((el) => {
    let [destination, price, status] = el.split('|');
    price = Number(price);
    result.push(new Ticket(destination, price, status));
  });

  return result.sort((a, b) => {
    if (typeof a[sortingCriteria] === 'number') {
      return a[sortingCriteria] - b[sortingCriteria];
    } else {
      return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    }
  });
}

ticketSorter(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
