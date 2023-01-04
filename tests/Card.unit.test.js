const Card = require("../src/Card.js");

describe("Card", () => {
  describe("Card instantiation", () => {
    it("Can be instantiated", () => {
      const card = new Card();

      expect(card).toBeInstanceOf(Object);
    });
  });
});
