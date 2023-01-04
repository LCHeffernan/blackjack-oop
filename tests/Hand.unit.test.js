const Hand = require("../src/Hand.js");

describe("Hand", () => {
  describe("hand instantiation", () => {
    let hand;

    beforeEach(() => {
      hand = new Hand();
    });
    it("can be instantiated", () => {
      expect(hand).toBeInstanceOf(Object);
    });

    it("playerHand and softAces are empty arrays", () => {
      expect(hand.playerHand.length).toEqual(0);
      expect(hand.softAces.length).toEqual(0);
    });

    it("playerScore is 0", () => {
      expect(hand.playerScore).toEqual(0);
    });

    it("isHandValid is true", () => {
      expect(hand.isHandValid).toEqual(true);
    });

    it("isGameOver is false", () => {
      expect(hand.isGameOver).toEqual(false);
    });
  });
});
