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

  describe("Deck has been populated correctly", () => {
    let deck;
    let unshuffledDeck;

    beforeEach(() => {
      deck = new Deck();
      deck.initiateDeck();
      unshuffledDeck = deck.cards;
    });

    it("Deck has 52 cards upon deck being populated", () => {
      expect(unshuffledDeck.length).toEqual(52);
    });

    it("There are 13 of each suit", () => {
      const suits = ["♣️", "♥️", "♠️", "♦️"];
      const sortedSuits = suits.map((suit) =>
        unshuffledDeck.filter((card) => card.cardSuit === suit)
      );

      sortedSuits.forEach((sortedSuit) =>
        expect(sortedSuit.length).toEqual(13)
      );
    });

    it("There are 4 of each rank", () => {
      const ranks = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ];
      const sortedRanks = ranks.map((rank) =>
        unshuffledDeck.filter((card) => card.cardRank === rank)
      );

      sortedRanks.forEach((sortedRank) => expect(sortedRank.length).toEqual(4));
    });
  });
});
