const Deck = require("../src/Deck.js");
const Dealer = require("../src/Dealer.js");
const Hand = require("../src/Hand.js");
const SplitHand = require("../src/SplitHand.js");

// add as parameters dealer and number of players
const startGame = () => {
  const deck = new Deck();
  deck.initiateDeck();
  const dealer = new Dealer(deck);
  const hand = new Hand(dealer);
  hand.hitMe();
  hand.hitMe();

  splitHand(hand, dealer);
};

const splitHand = (hand, dealer) => {
  if (hand.playerHand[0].cardValue === hand.playerHand[1].cardValue) {
    const secondHand = new SplitHand(dealer, hand.playerHand[0]);
    hand.splitCurrentHand();
    return secondHand;
  } else {
    console.log("cards must be of the same value to split the hand");
  }
};

startGame();
