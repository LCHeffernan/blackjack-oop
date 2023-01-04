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

    it("Ace card has rank A, suit 'Mock' and value 11 upon card initiation", () => {
      const aceRank = "A";
      const mockSuit = "Mock";
      const aceCard = new Card(aceRank, mockSuit);

      expect(aceCard.cardRank).toEqual(aceRank);
      expect(aceCard.cardSuit).toEqual(mockSuit);
      expect(aceCard.cardValue).toEqual(11);
    });
  });

  describe("calculateValue method", () => {
    it("cardValue of ace is 1 when calculateValue is called with 'hard'", () => {
      const aceCard = new Card("A", "Mock");
      aceCard.cardValue = aceCard.calculateValue("hard");

      expect(aceCard.cardValue).toEqual(1);
    });
  });
});
