const Deck = require("../src/Deck.js");

describe("Deck", () => {
  describe("Deck instantiation", () => {
    it("Can be instantiated", () => {
      const deck = new Deck();
      expect(deck).toBeInstanceOf(Object);
    });
  });
});
