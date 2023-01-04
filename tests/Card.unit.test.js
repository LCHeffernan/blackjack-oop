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

    it("Number card has rank and value 3, and suit 'Mock'", () => {
      expect(card.cardRank).toEqual(rank);
      expect(card.cardSuit).toEqual(suit);
      expect(card.cardValue).toEqual(+rank);
    });

    it("calculateValue is a method", () => {
      expect(typeof card.calculateValue).toBe("function");
    });
  });
  
  describe("Ace and picture cards", () => {
    it("Picture card has rank Q, suit 'Mock' and value 10", () => {
      const pictureRank = "Q";
      const mockSuit = "Mock";
      const pictureCard = new Card(pictureRank, mockSuit);

      expect(pictureCard.cardRank).toEqual(pictureRank);
      expect(pictureCard.cardSuit).toEqual(mockSuit);
      expect(pictureCard.cardValue).toEqual(10);
    });
  });
});
