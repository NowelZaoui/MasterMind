# MasterMind
Done by Nowel Zaoui Gonzalez u1956284 and Roger Costa Fernandez u1961600

## Implementation
First you enter the username. After this the main interface appears, where we will be all the time. It is made up of the Wins and Losses counter and with an Input to add the number.

If you do not enter a number, or enter a number that is not a natural 4-digit number, an alert will appear notifying you of the corresponding error. This has been done by passing the input through different functions to ensure that you enter the number correctly: how do you check if it is not a NaN, the string is 4 or if all the characters are numbers.

In case everything is correct, it will see if the numbers correspond the same as with the secret number. What it does is look if the same number (character) is present in the same position as in the secret code or if the character is present somewhere else. Remember that the secret number does not repeat number.

If the number of hits in position is equal to the length of the secret number (4), it means that the input is correct and that the number has been found. In this case, what is done is to increase the number of victories and the table is cleared for the next game.

Otherwise, if the number of correct positions is lower, it means that it has not yet been found. What is done then is to add the input to the table also adding how many hits in position and how many hits in existence of the number there have been, to help the user in the next round to try again, also increasing the round counter.
If the round counter reaches the limit, a message that the user has lost is skipped, incrementing the loss counter and clearing the table for the next game.

## EXTRA: funMode
## EXTRA: funMode
