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

    it("dealCard is a method", () => {
        expect(typeof dealer.dealCard).toBe("function");
      });
  });

  describe("Deck methods", () => {
    const FAKEPACKSIZE = 52;
    let fakeCards = [];
    let unshuffledDeck = [];
    let deck;
    let dealer;
    let shuffledDeck;

    beforeEach(() => {
      for (let i = 1; i <= FAKEPACKSIZE; i++) {
        fakeCards.push({
          cardRank: i,
          cardSuit: "Mock",
          cardValue: i,
          calculateValue: jest.fn(),
        });
        unshuffledDeck.push({
          cardRank: i,
          cardSuit: "Mock",
          cardValue: i,
          calculateValue: jest.fn(),
        });
      }
      deck = {
        cards: fakeCards,
        initiateDeck: jest.fn(),
        populateSuit: jest.fn(),
      };
      dealer = new Dealer(deck);
      shuffledDeck = dealer.currentDeck;
    });

    afterEach(() => {
      unshuffledDeck = [];
      fakeCards = [];
    });

    it("The pack was shuffled", () => {
      expect(shuffledDeck.map((card) => card.cardRank)).not.toEqual(
        unshuffledDeck.map((card) => card.cardRank)
      );
    });
  });
});
