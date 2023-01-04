const Hand = require("../src/Hand.js");

describe("Hand", () => {
  describe("hand instantiation", () => {
    let hand;

    beforeEach(() => {
      hand = new Hand();
    });
    it("can be instantiated", () => {
      expect(hand).toBeInstanceOf(Object);
    });

    it("playerHand and softAces are empty arrays", () => {
      expect(hand.playerHand.length).toEqual(0);
      expect(hand.softAces.length).toEqual(0);
    });

    it("playerScore is 0", () => {
      expect(hand.playerScore).toEqual(0);
    });

    it("isHandValid is true", () => {
      expect(hand.isHandValid).toEqual(true);
    });

    it("isGameOver is false", () => {
      expect(hand.isGameOver).toEqual(false);
    });

    it("hitMe is a method", () => {
      expect(typeof hand.hitMe).toBe("function");
    });
  });

  let setUpMocks;
  beforeEach(() => {
    setUpMocks = (fakeCards) => {
      const dealer = {
        currentDeck: fakeCards,
        cardJustDealt: {},
        shuffleDeck: jest.fn(),
        dealCard: jest.fn(() => fakeCards.shift()),
      };
      return new Hand(dealer);
    };
  });

  describe("Hit me", () => {
    let fakeCards = [];
    const FAKEPACKSIZE = 52;
    let hand;

    beforeEach(() => {
      for (let i = 1; i <= FAKEPACKSIZE; i++) {
        fakeCards.push({
          cardRank: i,
          cardSuit: "Mock",
          cardValue: i,
          calculateValue: jest.fn(),
        });
      }
      hand = setUpMocks(fakeCards);
    });

    afterEach(() => {
      fakeCards = [];
    });

    it("Increases the player's hand by 1", () => {
        hand.hitMe();
        hand.hitMe();
        const startingNumberOfCards = hand.playerHand.length;
        hand.hitMe();
        const numberOfCardsAfterHitMe = hand.playerHand.length;
  
        expect(numberOfCardsAfterHitMe).toEqual(startingNumberOfCards + 1);
      });
  });
});
