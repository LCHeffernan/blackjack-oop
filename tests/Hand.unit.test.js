const Hand = require("../src/Hand.js");

describe("Hand", () => {
  describe("hand instantiation", () => {
    it("can be instantiated", () => {
      const hand = new Hand();
      expect(hand).toBeInstanceOf(Object);
    });
  });
});
