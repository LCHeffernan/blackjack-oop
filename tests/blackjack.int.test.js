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
  });
});
