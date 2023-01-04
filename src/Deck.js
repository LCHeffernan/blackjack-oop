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
        const rank = i.toString();
        const card = new Card(rank, suit);
        cards.push(card);
      }
    });
    return cards;
  }
}

module.exports = Deck;
