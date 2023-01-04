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

    it("playerHand is an empty array", () => {
      expect(hand.playerHand.length).toEqual(0);
    });
  });
});
