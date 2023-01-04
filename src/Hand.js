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
    this.playerScore += cardReceived.cardValue;
  }

  stand() {
    if (this.isHandValid) {
      this.isGameOver = true;
    }
  }
}

module.exports = Hand;
