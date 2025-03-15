import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from  "./pages/Contact";
import About from  "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import ResponsibleRummy from "./pages/ResponsibleRummy";



import "./App.css";

const Home = () => <div className="banner"
><h2 className="heading"> WELCOME TO BGM GAME
   
</h2>
<img src="/rummy2pic.png" alt="Home" className="home-img"/>
</div>;






const GameRule = () => <div className="game-rule">
 <div className="game-heading"><h1>Game Rules</h1></div> 
<p>Rummy is a popular card game played with sets of playing cards. This is one of the most popular card game under the category of draw and discard games in India. Among this discard & draw game, Indian 13 card rummy game is most played game across India. The basic objective in every rummy game is to improve your hand by dealing sets of cards and forming a particular sequence or set adhering to certain rules of the game. It is purely a skill-based game and the only luck factor involved is the cards that you are dealt in random at the beginning. 
  A skilled player can easily improve the hand by discarding the cards that are unlikely to be helpful and picking up the favourable cards.</p>

<h2>Rules to Remember:</h2>
Always keep in mind that you are playing rummy to arrange the cards in sequences first.
 Sequence is thumb rule of the game. You need to arrange at least two sequences, out of which one has to be a pure sequence. 
 The other remaining cards can be arranged in valid sequences and/or sets in a rummy game. Follow the step-by-step instructions to 
 learn how to play Indian Rummy game:

<h2>Rules of Rummy:</h2>
Here are the basic rummy rules to help you understand the 13 card game easier.


The game is played between 2 to 6 players.
Rummy is played either with a set number of deals or a target score, both of which is agreed upon at the start of the game.
Two standard decks of 52 cards is used consisting of Ace, 2,3,4,5,6,7,8,9,10, Jack, Queen and King and one printed joker.
Each player is dealt with 13 cards
The objective of the game is to arrange all 13 cards in sequences and/or sets.
A Sequence is 3 or more running cards of the same suit. Eg:10♦ J♦ Q♦
A Set is minimum 3 or more cards of the same face value. Eg: 4♦ 4♠ 4 ♣ or 9♥ 9♠ 9♣ 9♦.
A Joker (randomly selected at the beginning of all game) can be used in place of any other card. Eg: 8♥ K♠ 6♥ is a sequence where K♠ is the joker and is used in place of 7♥
You can use one or more Jokers to complete/fill your sets and sequences.
A Pure Sequence is a sequence without a Joker. Exception - J♥ Q♥ K♥ is a pure sequence even if K♥ is the Joker.
<h2>How to Play Rummy - Basic Concepts</h2>
Indian Rummy is usually played with two packs of cards with two jokers.
Cards in each category rank from low to high: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen and King.
Ace can be used as 1 or a face card when forming the sets.
Card values are as follows: Face cards, (K, Q, J) - 10 points, Ace - 10 points.
Card vale of others is same as the numbers on the card (e.g. - 2 for 2 and 7 for 7).
<h2>What is Sequence/Run</h2>
A Sequence/Run consists of 3 or more cards of same suit and is in consecutive order. The valid order is A-2-3-4-5-6-7-8-9-10-J-Q-K-A. Thus with ace you can form the run A♦ - 2♦ - 3♦ or Q♣ - K♣ - A♣ but you cannot form K♣ - A♣ - 2♣.

Examples of valid Sequence/Runs are: consecutive cards of the same suit.

4♥ - 5♥ - 6♥
9♣ - 10♣ - J♣,
9♠ -10♠ - J♠ - Q♠,
A♥ - 2♥ - 3♥ - 4♥,
And
8♦ - 9♦ - 10♦ - J♦ - Q♦ - K♦
These are pure or straight or natural sequence (sequence without a joker).

Two sequences is compulsory but you can use joker for one sequence. A sequence can also use a joker as substitute for any missing card. Such a sequence is non pure sequence.

Examples of non pure runs are
7♠ - 5♠ - joker - 9♠, and 2♦ - 3♦ - joker - 5♦.

<h2>What is a Set</h2>
The three cards of same rank and same suit are treated as Set.


For example:
9♥ - 9♠ - 9♦
And
J♠- J♥ - J♦
All 9`s and J`s are of different suits ♦ - ♠ - ♥
Note: All the cards in a set have to be of different suits in a rummy game. If two or more cards of the same suit are used, it will be considered as an invalid set. A set cannot have more than four cards. You can use joker also to make a valid set.
Check out the examples of invalid sets and learn how to play rummy card game in the right way:

Q♥ is the wild joker K♥ K♥ K♦
Invalid Set: It has two Ks of the same suits ♦ 7♦ 7♣ 7♦ 7♥
Invalid Set: It has two 7s of the same suits ♦ 7♦ 7♣ 7♦ 7♥ Q♥
Invalid Set: It has five cards including same suits 7♦ .
How to Play Rummy with Jokers

Two types of jokers are used in rummy. They serve special roles that can help you to win a rummy game: Wild Joker: When a rummy game begins, a wild joker is selected randomly from the closed deck that can be used in place of any missing card.

For example: If K♥ is selected as the wild joker, then K of any suit can be used as the wild joker.
7♦ 8♦ K♠ 9♦
J♣ K♦ J♠ J♥
J♦ has replaced K♦. to form a set of J♣ K♦ J♠ J♥
Printed Joker (J): Printed jokers also play the same role in rummy games. If you get printed jokers in your hand, you can use them to replace any missing cards to form sets and sequences. You go through the examples below for better understanding.

8♠ 9♠ J
J has replaced 10/7♠to form a sequence of 7♠ 8♠ 9♠ or 8♠ 9♠ 10♠
4♥ J4♠ 4♦ J has replaced 4♣ to form a set of 4♥ 4♣ 4♠ 4♦
Note: If the Printed Joker is randomly selected as the wild joker, then A`s of all suits will become wild jokers.
Types of Sequences:

Now, you know that a sequence is group of three or more consecutive cards of the same suit. You should also know that there are two types of sequences that are used in 13 card rummy games. Learn how to play rummy card game with pure and impure sequences:

Pure Sequence: A pure sequence is group of three or more consecutive cards of the same suit that is formed without any joker. View the examples below to learn how to play rummy with pure sequences:

7♥ 8♥ 9♥
Here no joker (printed or wild) is used to form a pure sequence.
2♠ 3♠ 4♠ 5♠ 6♠
similarly, no joker (printed or wild) is used to form a pure sequence.
Impure Sequence: An impure sequence is group of three or more consecutive cards of the same suit with one or more jokers. Check out the examples to learn how to play rummy with impure sequences:

4♦ 5♦ K♠ 7♦
K♠ is used as a wild joker to replace 6♦ to form a sequence of 4♦ 5♦ 6♦ 7♦
3♠ J♥ 5♠ 6♠ K♥
Here K♥ (wild joker) and (J) Printed Joker are replacing 7♠ and 4♠ to form a sequence of 3♠ 4♠ 5♠ 6♠ 7♠
Note: Wild Jokers can be used to form pure sequences if they are arranged in the same suit
J♠ Q♠ K♠
Here, even if Q? is the wild joker, it can be used to form a pure sequence, as J♠ Q♠ and K♠ are of the same suit ♠
Game Play
Rummy is called as one of the most popular card game of picks and discards. Therefore, picking and discarding cards is one of the main aspects in learning how to play rummy card game:

First pick a card from either Closed or Open Deck.
Then, discard one of the cards to the Open Deck.
How to Win in Rummy
When you have arranged all the cards in your hand into proper sequences and/or sets, including one pure sequence, you need to declare the game by discarding one of the cards to the Finish Slot. After you have declared the rummy game, you need to arrange your cards into proper sequences and/or sets to show them to your opponents and wait for them to show their hands.

<h2>Valid Declaration</h2>
View the examples below to learn how to play rummy game and make valid declaration:

Example #1:
A♥ 2♥ 3♥ 4♥ | 7♣ 8♣ 9♣ | 10♦ 10♠ 10♣| K♠ K♦ K♣
This is a valid declaration as it meets the objective of the game.
All the 13 cards are arranged in valid sequences and sets.
It has a minimum of two sequences - A♥ 2♥ 3♥ 4♥ and 7♣ 8♣ 9♣. Both are pure sequences and meet the game objective of having at least two sequences, out of which one is a pure sequence
Example #2:
9♣ is the Wild Joker
A ♥ 2♥ 4♥ 9♣ | 7♣ 8♣ 9♣ | 3♦ 3♠ 3♣ | J♠ J♦ J♣
This is a valid declaration as it meets the objective of the game.
Invalid Declaration
<b>Example #1: Invalid Set</b>
A♥ 2♥ 3♥ 4♥ 5♥ | 4 ♣ 5 ♣ 6 ♣ 7 ♣ | 7♦ 7♦ 7♥ 7♣ | A set is group of three or four cards of the same face value with different suits. Here, 7♦ 7♦ 7♥ 7♠ is an invalid set as there are two cards of the same suit - 7♦
<b>Example #2: Declaring without Sequence</b>
10♥ is the Wild Joker 8♦ 8♠ 8♥ | A♦ A♠ A♥ | 9♥ 9♣ 9♥ | 5♦ 5♠ 5♥ 10♥ | There are no sequences in this example. In order to make a valid declaration, there has to be at least two sequences, out of which one has to be a pure sequence. >

<b>Example #3: Declaring without Two Sequences</b>
10♥ is the Wild Joker
A♥ 2♥ 3♥ 4♥ | 4♣ 4♠ 10♥ | 7♦ 7♠ 7♥ | 2♦ 2♠ 2♥ |
There is only one sequence in this example. In order to make a valid declaration, there has to be at least one pure sequence (without Joker) and another sequence (with or without Joker). Here, there is only one sequence and you need to have at least two to make a valid declaration.

<b>Example #4: Declaring without Pure Sequence</b>
10♥ is the Wild Joker
A♥ 2♥ 3♥ 10♥ | 4♣ 5♣ 10♥ | 7♦ 7♠ 7♥ | 2♦ 2♠ 2♥ |
There is no pure sequence in this example. In order to make a valid declaration, there has to be at least one pure sequence (without Joker) and another sequence (with or without Joker). Here, there is only impure sequence and there is no pure sequence. Learn these examples and learn how to play rummy card game without making any invalid declaration.
Maximum Limit of Points In 13 card game rummy, a player can get a maximum of 80 points irrespective of the number of high value cards in his/her hand.

Wrong Declaration: If a player has declared without completing the objective or without forming correct sequences and/or sets, he/she will be penalized with 80 points.

Consecutive Misses: If a player misses three consecutive turns, he/she gets a middle drop and is automatically dropped out of the rummy game.

Losing Players with a Valid Hand: Players who declare second with a valid hand get 2 points. So, if you win a game against players who also have a valid hand, the losing players with valid hands get two points.

Leave Table: You will get a Middle Drop of 40 points if you leave the table after drawing a card from the Closed Deck. However, if you leave or drop without seeing the card, you will get the First drop.

Winning Points: The winner gets zero points

Losing Points: The loser/losers get total points based on their card values.

Winner:
(Entry Fee) - Ecofare Gaming Fees = Winning Amount.</div>;

// const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gamerule" element={<GameRule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/responsible-rummy" element={<ResponsibleRummy />} />
        {/* <Route path="/legality" element={<Legality />} /> */}
       
      </Routes>
      {/* <Contact/> */}
      <Footer />
     
    </Router>
  );
}

export default App;

