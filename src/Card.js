class Card {
  constructor(rank, suit) {
    this.cardRank = rank;
    this.cardSuit = suit;
    this.cardValue = this.calculateValue();
  }

  calculateValue(aceChoice) {
    const rank = this.cardRank;
    if (rank === "A") {
      if (aceChoice === "hard") {
        return 1; // hard means ace is scored as 1.
      }
      return 11; // or ace is scored as 11.
    }
    if (rank === "J" || rank === "Q" || rank === "K") {
      return 10;
    }
    return +rank;
  }
}

module.exports = Card;
