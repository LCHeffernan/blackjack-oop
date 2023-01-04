const Deck = require("../src/Deck.js");

describe("Deck", () => {
  describe("Deck instantiation", () => {
    let deck;

    beforeEach(() => {
      deck = new Deck();
    });

    it("Can be instantiated", () => {
      expect(deck).toBeInstanceOf(Object);
    });

    it("initiateDeck is a method", () => {
      expect(typeof deck.initiateDeck).toBe("function");
    });

    it("populateSuit is a method", () => {
      expect(typeof deck.populateSuit).toBe("function");
    });
  });
});
