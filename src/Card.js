class Card {
  constructor(rank, suit) {
    this.cardRank = rank;
    this.cardSuit = suit;
    this.cardValue = this.calculateValue();
  }

  calculateValue() {
    const rank = this.cardRank;
    if (rank === "A") {
      return 11;
    }
    if (rank === "J" || rank === "Q" || rank === "K") {
      return 10;
    }
    return +rank;
  }
}

module.exports = Card;
