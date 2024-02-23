const Hand = require("./Hand");

class SplitHand extends Hand {
  constructor(dealer, splitCard) {
    super(dealer, splitCard);
    this.createSecondHand(splitCard);
  }
  createSecondHand(splitCard) {
    this.playerHand.push(splitCard); //push card onto a second hand
    if (splitCard.cardRank === "A") {
      this.softAces.push(splitCard);
    }
    this.playerScore += splitCard.cardValue;
    this.splitHand = true;
    this.checkHandIsValid();
  }
}

module.exports = SplitHand;
