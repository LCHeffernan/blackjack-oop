class Hand {
  constructor(dealer) {
    this.dealer = dealer;
    this.playerHand = [];
    this.playerScore = 0;
    this.isHandValid = true;
    this.isGameOver = false;
    this.softAces = [];
  }

  hitMe() {
    const cardReceived = this.dealer.dealCard();
    this.playerHand.push(cardReceived);
  }
}

module.exports = Hand;
