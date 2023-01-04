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
    if (!this.isGameOver) {
      const cardReceived = this.dealer.dealCard();
      this.playerHand.push(cardReceived);
      this.playerScore += cardReceived.cardValue;
      this.checkHandIsValid();
    } else {
      throw new Error("Game is over");
    }
  }

  stand() {
    if (this.isHandValid) {
      this.isGameOver = true;
    } else {
      throw new Error("Game is over");
    }
  }

  checkHandIsValid() {
    if (this.playerScore > 21) {
      this.isHandValid = false;
      this.isGameOver = true;
    }
  }
}

module.exports = Hand;
