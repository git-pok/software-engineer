# HTML, CSS, and JavaScript Memory Game Challenge
For this assignment, you’ll be building a memory game in the browser using HTML, CSS, and JavaScript. Your goal is to build a card-based memory game.

Players will be shown a collection of cards, face down, and can click on a card to reveal what’s underneath.

After clicking on two cards, the game should check to see whether they match. If they do, they will remain facing up.

If not, the cards should remain displayed to the player for one second, and then flip back down.

The goal of the game is to match up all the pairs.

## Part 1
- Clicking a card should change the background color to be the color of the class it has.
- Users should only be able to change at most two cards at a time.
- Clicking on two matching cards should be a “match” — those cards should stay face up.
- When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again. You should make sure to use a setTimeout so that you can execute code after one second.

## Part 2
- Make sure this works only if you click on two different cards — clicking the same card twice shouldn’t count as a match!
- Make sure that you can not click too quickly and guess more than two cards at a time.