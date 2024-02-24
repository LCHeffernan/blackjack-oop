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
};

const splitHand = (hand, dealer) => {
  return new SplitHand(dealer, hand);
};

module.exports = {startGame, splitHand};
