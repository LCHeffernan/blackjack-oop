const Card = require("./Card");

class Deck {
  constructor() {
    this.cards = [];
  }

  initiateDeck() {
    this.cards = this.populateSuit(["♣️", "♥️", "♠️", "♦️"]);
  }

  populateSuit(suits) {
    const cards = [];
    suits.forEach((suit) => {
      for (let i = 1; i <= 13; i += 1) {
        let rank;
        switch (i) {
          case 1:
            rank = "A";
            break;
          case 11:
            rank = "J";
            break;
          case 12:
            rank = "Q";
            break;
          case 13:
            rank = "K";
            break;
          default:
            rank = i.toString();
        }
        const card = new Card(rank, suit);
        cards.push(card);
      }
    });
    return cards;
  }
}

module.exports = Deck;
