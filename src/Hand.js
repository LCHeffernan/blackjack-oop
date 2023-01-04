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
      if (cardReceived.cardRank === "A") {
        this.softAces.push(cardReceived);
      }
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
    const aces = this.softAces;
    if (this.playerScore > 21) {
      if (aces.length > 0) {
        aces[0].cardValue = aces[0].calculateValue("hard");
        aces.shift();
        this.playerScore -= 10;
      } else {
        this.isHandValid = false;
        this.isGameOver = true;
      }
    }
    if (this.playerScore === 21) {
      this.isGameOver = true;
    }
  }
}

module.exports = Hand;
