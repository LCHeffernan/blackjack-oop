class Dealer {
  constructor(deck) {
    this.currentDeck = deck.cards;
    this.cardJustDealt = {};
    this.currentDeck = this.shuffleDeck();
  }

  shuffleDeck() {
    return this.currentDeck.sort(() => Math.random() - 0.5);
  }

  dealCard() {
    this.cardJustDealt = this.currentDeck.shift();
    return this.cardJustDealt;
  }
}
module.exports = Dealer;
