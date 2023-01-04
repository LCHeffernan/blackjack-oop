class Card {
  constructor(rank, suit) {
    this.cardRank = rank;
    this.cardSuit = suit;
    this.cardValue = this.calculateValue();
  }

  calculateValue() {
    const rank = this.cardRank;
    return +rank;
  }
}

module.exports = Card;
