const Hand = require("./Hand");

class SplitHand extends Hand {
  constructor(dealer, hand) {
    super(dealer);
    this.createSecondHand(hand.playerHand);
    hand.splitCurrentHand();
  }
  createSecondHand(originalHand) {
    if (
      originalHand[0].cardRank === 
      originalHand[1].cardRank
    ) {
      const splitCard = originalHand[0];
      this.playerHand.push(splitCard); //push card onto a second hand

      if (splitCard.cardRank === "A") {
        splitCard.cardValue = splitCard.calculateValue();
        this.softAces.push(splitCard);
      }

      this.playerScore += splitCard.cardValue;
      this.splitHand = true;
      this.checkHandIsValid();
    } else {
      throw new Error("cards must be of the same value to split the hand");
    }
  }
}

module.exports = SplitHand;
