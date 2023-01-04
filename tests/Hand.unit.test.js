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

    it("stand is a method", () => {
      expect(typeof hand.stand).toBe("function");
    });

    it("checkHanIsValid is a method", () => {
      expect(typeof hand.checkHandIsValid).toBe("function");
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
    let startingNumberOfCards;

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
      hand.hitMe();
      hand.hitMe();
      startingNumberOfCards = hand.playerHand.length;
      hand.hitMe();
    });

    afterEach(() => {
      fakeCards = [];
    });

    it("Increases the player's hand by 1 and is a different card from the one dealt before", () => {
      expect(hand.playerHand.length).toEqual(startingNumberOfCards + 1);
      expect(hand.playerHand[2]).not.toEqual(hand.playerHand[1]);
    });

    it("Updates the player's score", () => {
      const score = hand.playerHand.reduce((a, b) => a + b.cardValue, 0);

      expect(hand.playerScore).toEqual(score);
    });
  });

  describe("Stand", () => {
    it("isGameOver is true when stand is called and hand is valid", () => {
      const twoCards = [
        { rank: "4", value: 4 },
        { rank: "K", value: 10 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: jest.fn(),
        };
      });
      const hand = setUpMocks(twoCards);
      hand.hitMe();
      hand.hitMe();
      hand.stand();

      expect(hand.isHandValid).toEqual(true);
      expect(hand.isGameOver).toEqual(true);
    });
  });
});
