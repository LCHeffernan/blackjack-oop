class Dealer {
  constructor(deck) {
    this.currentDeck = deck.cards;
    this.currentDeck = this.shuffleDeck();
  }

  shuffleDeck() {
    return this.currentDeck.sort(() => Math.random() - 0.5);
  }
}
module.exports = Dealer;
