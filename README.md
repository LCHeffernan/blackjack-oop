# Blackjack App
___
## Description.
This is a JavaScript project to create an app for the game blackjack. It was tested using Jest and the tests can be found in the tests folder. I created a GUI for this project which is in a different repo [here](https://github.com/LCHeffernan/blackjack-gui).

___
## Download and setup.
This project has the following dependencies: Jest and Node. To download the project:
* Fork the repository.
* Clone down your fork using ```git clone```.
* Change directory into your cloned folder and run ``` npm install ```.

___
## Tests.
* To run the unit tests use the command ```npm run unit```
* To run the integration tests use the command ```npm run int```
* To run all test and view the coverage run the command ```npm test```

___
## Using the blackjack app.


|  | Blackjack rules |
| ------ | ------ |
|Aim|To score 21 or as close as possible. A score of 21 with 2 cards is called 'blackjack'.|
|Scoring|The cards 2-10 are worth their face value, the picture cards (Jack, Queen and King) are worth 10 each and the ace is worth either 11 or 1. The ace is worth 11 initially but if this would put the player's score over 21 then it gets re-evaulated to a 1.|
|Game play|The player is dealt an opening hand of 2 cards. They then have two options, to 'hit' and receive another card or to 'stand' and have their final score evaluated. If their score is over 21 they are 'bust' and the game is over.|

If you would like to play a game you can run the program in node REPL using the command ```node```. Run the commands in the following order.

|command|what it does|
|------|------|
|```const Deck = require("./src/Deck.js");```|Import Deck into REPL|
|``` const Dealer = require("./src/Dealer.js");```|Import Dealer into REPL|
|```const Hand = require("./src/Hand.js");```.|Import Hand into REPL|
|```const deck = new Deck();```|Create a deck|
|```deck.initiateDeck();```|Populate it with a standard deck of cards|
|```const dealer = new Dealer(deck);```|Create a dealer|
|```const hand = new Hand(dealer);```|Create a hand|
|```hand.hitMe();```|Deal first card|
|```hand.hitMe();```|Deal second card|

Once the above commands have been run, the game is ready to play. You can interact choosing any of the following commands.

|command|what it does|
|------|------|
|```hand.playerHand;```|View the cards in your hand|
|```hand.playerScore;```|View your current score|
|```hand.hitMe();```|To receieve another card|
|```hand.stand();```|To finish the game with your current hand|

Game over - Once the game is over you cannot continue to interact with the app. Attempting to 'hit' or 'stand' will result in an error being thrown. The game is over in the following situations:
* Your hand goes 'bust' (score goes over 21)
* You choose to stand with your current cards
* You reach the score of 21
<img src="/images/Screenshot-REPL.png" width="271" height="359" alt="Screenshot of app being used in node REPL" title="App being used in node REPL"/>

___
## Future plans.
Given more time I would like to add functionality to mimic a real blackjack game where if a player is dealt two cards of the same rank in their opening hand they can 'split them'. This then gives the player two hands which they can then hit or stand in the usual manner.
___
## Author.
Lisa Heffernan

* Twitter [@Iisaheffernan](https://twitter.com/Iisaheffernan)
* GitHub [@LCHeffernan](https://github.com/LCHeffernan)
* LinkedIn [Lisa Heffernan](https://www.linkedin.com/in/lisa-heffernan-54b61312a)