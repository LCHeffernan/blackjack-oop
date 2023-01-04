const Card = require("../src/Card.js");

describe("Card", () => {
  describe("Card instantiation", () => {
    let card;
    const rank = "3";
    const suit = "Mock";

    beforeEach(() => {
      card = new Card(rank, suit);
    });
    it("Can be instantiated", () => {
      expect(card).toBeInstanceOf(Object);
    });

    it(`Number card has rank 3`, () => {
      expect(card.cardRank).toEqual(rank);
      expect(card.cardSuit).toEqual(suit);
    });

    it("calculateValue is a method", () => {
      expect(typeof card.calculateValue).toBe("function");
    });
  });
});
