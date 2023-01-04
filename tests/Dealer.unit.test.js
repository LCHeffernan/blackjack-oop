const Dealer = require("../src/Dealer.js");

describe("Dealer", () => {
  describe("Dealer instantiation", () => {
    let card;
    let deck;
    let dealer;

    beforeEach(() => {
      card = {
        cardRank: 2,
        cardSuit: "Mock",
        cardValue: 2,
        calculateValue: jest.fn(),
      };
      deck = {
        cards: [card],
        initiateDeck: jest.fn(),
        populateSuit: jest.fn(),
      };
      dealer = new Dealer(deck);
    });

    it("Can be instantiated", () => {
      expect(dealer).toBeInstanceOf(Object);
    });

    it("shuffleDeck is a method", () => {
      expect(typeof dealer.shuffleDeck).toBe("function");
    });
  });
});
