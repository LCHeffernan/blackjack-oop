const Hand = require("../src/Hand.js");
const SplitHand = require("../src/SplitHand.js");

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

  describe("Split", () => {
    it("When split is called a second hand is created", () => {
      let sameValueHand;
      const sameValueCards = [
        { rank: 5, value: 5 },
        { rank: 5, value: 5 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: jest.fn(),
        };
      });
      sameValueHand = setUpMocks(sameValueCards);
      sameValueHand.hitMe();
      sameValueHand.hitMe();
      const splitCard = sameValueHand.playerHand[0];
      const secondHand = new SplitHand(
        sameValueCards,
        sameValueHand
      );

      expect(sameValueHand.playerHand.length).toEqual(1);
      expect(sameValueHand.splitHand).toEqual(true);
      expect(secondHand.playerHand.length).toEqual(1);
      expect(secondHand.splitHand).toEqual(true);
      expect(secondHand.playerHand[0]).toEqual(splitCard);
    });

    it("soft ace is removed from array when hand is split", () => {
      let sameValueHand;
      calculateCardValueMockFn = jest.fn((param) => (param === "hard" ? 1 : 11));
      const sameValueCards = [
        { rank: "A", value: 11 },
        { rank: "A", value: 11 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: calculateCardValueMockFn,
        };
      });
      sameValueHand = setUpMocks(sameValueCards);
      sameValueHand.hitMe();
      sameValueHand.hitMe();

      const splitCard = sameValueHand.playerHand[0];

      const secondHand = new SplitHand(
        sameValueCards,
        sameValueHand
      );
   
      expect(sameValueHand.playerHand.length).toEqual(1);
      expect(sameValueHand.splitHand).toEqual(true);
      expect(secondHand.playerHand.length).toEqual(1);
      expect(secondHand.splitHand).toEqual(true);
      expect(secondHand.playerHand[0]).toEqual(splitCard);
      expect(sameValueHand.softAces.length).toEqual(1);
      expect(sameValueHand.playerScore).toEqual(11);
      expect(secondHand.softAces.length).toEqual(1);
      expect(secondHand.playerScore).toEqual(11);
    });

    it("Throws an error if split is called when the opening 2 cards have different values", () => {
      let sameValueHand;
      const sameValueCards = [
        { rank: 4, value: 4 },
        { rank: 5, value: 5 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: jest.fn(),
        };
      });
      sameValueHand = setUpMocks(sameValueCards);
      sameValueHand.hitMe();
      sameValueHand.hitMe();

      expect(() => new SplitHand(
        sameValueCards,
        sameValueHand
      )).toThrow(
        "cards must be of the same value to split the hand"
      );
    });
  });

  describe("Hand is bust", () => {
    let bustHand;

    beforeEach(() => {
      const ten = {
        cardRank: 10,
        cardSuit: "Mock",
        cardValue: 10,
        calculateValue: jest.fn(),
      };
      bustHand = setUpMocks([ten, ten, ten]);
      bustHand.hitMe();
      bustHand.hitMe();
      bustHand.hitMe();
    });

    it("isHandValid is false and isGameOver is true", () => {
      expect(bustHand.isHandValid).toEqual(false);
      expect(bustHand.isGameOver).toEqual(true);
    });

    it("Throws an error if hand is 'bust' and hitMe is called", () => {
      expect(() => bustHand.hitMe()).toThrow("Game is over");
    });

    it("Throws an error if hand is 'bust' and stand is called", () => {
      expect(() => bustHand.stand()).toThrow("Game is over");
    });
  });

  describe("Opening hand cases", () => {
    it("Scores one ace and one king as 21 and game is over with valid hand", () => {
      const twoCards = [
        { rank: "A", value: 11 },
        { rank: "K", value: 10 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: jest.fn(),
        };
      });
      const twoCardHand = setUpMocks(twoCards);
      twoCardHand.hitMe();
      twoCardHand.hitMe();

      expect(twoCardHand.playerScore).toEqual(21);
      expect(twoCardHand.playerHand.length).toEqual(2);
      expect(twoCardHand.isHandValid).toEqual(true);
      expect(twoCardHand.isGameOver).toEqual(true);
    });

    it("Pushes aces in softAces array, removes them is their value is re-evaluated to 1 and updates score", () => {
      const twoCards = [{}, {}].map(() => {
        return {
          cardRank: "A",
          cardSuit: "Mock",
          cardValue: 11,
          calculateValue: jest.fn((param) => (param === "hard" ? 1 : 11)),
        };
      });
      const twoCardHand = setUpMocks(twoCards);
      twoCardHand.hitMe();
      twoCardHand.hitMe();

      expect(twoCardHand.softAces.length).toEqual(1);
      expect(twoCardHand.playerScore).toEqual(12);
      expect(twoCardHand.playerHand[0].calculateValue).toHaveBeenCalledWith(
        "hard"
      );
      expect(twoCardHand.isHandValid).toEqual(true);
      expect(twoCardHand.isGameOver).toEqual(false);
    });
  });

  let calculateCardValueMockFn;
  beforeAll(() => {
    calculateCardValueMockFn = jest.fn((param) => (param === "hard" ? 1 : 11));
  });

  describe("3 card hand specific cases", () => {
    it("Scores an hand of king, queen and an ace as 21", () => {
      const threeCards = [
        { rank: "K", value: 10 },
        { rank: "Q", value: 10 },
        { rank: "A", value: 11 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: calculateCardValueMockFn,
        };
      });
      const threeCardHand = setUpMocks(threeCards);
      threeCardHand.hitMe();
      threeCardHand.hitMe();
      threeCardHand.hitMe();

      expect(threeCardHand.playerScore).toEqual(21);
      expect(threeCardHand.playerHand[2].calculateValue).toHaveBeenCalledWith(
        "hard"
      );
      expect(threeCardHand.isHandValid).toEqual(true);
      expect(threeCardHand.isGameOver).toEqual(true);
      expect(() => threeCardHand.hitMe()).toThrow("Game is over");
    });

    it("Scores an hand of two aces and a 9 as 21", () => {
      const threeCards = [
        { rank: "A", value: 11 },
        { rank: "A", value: 11 },
        { rank: 9, value: 9 },
      ].map((card) => {
        return {
          cardRank: card.rank,
          cardSuit: "Mock",
          cardValue: card.value,
          calculateValue: calculateCardValueMockFn,
        };
      });
      const threeCardHand = setUpMocks(threeCards);
      threeCardHand.hitMe();
      threeCardHand.hitMe();
      threeCardHand.hitMe();

      expect(threeCardHand.playerScore).toEqual(21);
      expect(threeCardHand.playerHand[0].calculateValue).toHaveBeenCalledWith(
        "hard"
      );
      expect(threeCardHand.isHandValid).toEqual(true);
      expect(threeCardHand.isGameOver).toEqual(true);
      expect(() => threeCardHand.hitMe()).toThrow("Game is over");
    });

    it("Scores an hand of three aces as 13", () => {
      const threeCards = [{}, {}, {}].map(() => {
        return {
          cardRank: "A",
          cardSuit: "Mock",
          cardValue: 11,
          calculateValue: calculateCardValueMockFn,
        };
      });
      const threeCardHand = setUpMocks(threeCards);
      threeCardHand.hitMe();
      threeCardHand.hitMe();
      threeCardHand.hitMe();

      expect(threeCardHand.playerScore).toEqual(13);
      expect(threeCardHand.playerHand[0].calculateValue).toHaveBeenCalledWith(
        "hard"
      );
      expect(threeCardHand.playerHand[1].calculateValue).toHaveBeenCalledWith(
        "hard"
      );
      expect(threeCardHand.isHandValid).toEqual(true);
      expect(threeCardHand.isGameOver).toEqual(false);
    });
  });
});
