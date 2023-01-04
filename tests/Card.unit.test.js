const Card = require("../src/Card.js");

describe("Card", () => {
  describe("Card instantiation", () => {
    let card;
    const rank = "3";

    beforeEach(() => {
      card = new Card(rank);
    });
    it("Can be instantiated", () => {
      const card = new Card(rank);

      expect(card).toBeInstanceOf(Object);
    });

    it(`Number card has rank 3`, () => {
        expect(card.cardRank).toEqual(rank);
      });
  });
});
