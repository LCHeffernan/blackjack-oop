const Deck = require("../src/Deck.js");
const Dealer = require("../src/Dealer.js");

describe("Integration tests", () => {
  describe("Dealer's deck has been populated correctly", () => {
    let deck;
    let dealer;

    beforeEach(() => {
      deck = new Deck();
      deck.initiateDeck();
      dealer = new Dealer(deck);
    });

    it("Dealer has 52 cards", () => {
      expect(dealer.currentDeck.length).toEqual(52);
    });

    it("There are 13 of each suit", () => {
      const suits = ["♣️", "♥️", "♠️", "♦️"];
      const sortedSuits = suits.map((suit) =>
        dealer.currentDeck.filter((card) => card.cardSuit === suit)
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
        dealer.currentDeck.filter((card) => card.cardRank === rank)
      );

      sortedRanks.forEach((sortedRank) => expect(sortedRank.length).toEqual(4));
    });
  });
});
