# MasterMind
Done by Nowel Zaoui Gonzalez u1956284 and Roger Costa Fernandez u1961600

## Implementation
First you enter the username. After this the main interface appears, where we will be all the time. It is made up of the Wins and Losses counter and with an Input to add the number.

If you do not enter a number, or enter a number that is not a natural 4-digit number, an alert will appear notifying you of the corresponding error. This has been done by passing the input through different functions to ensure that you enter the number correctly: how do you check if it is not a NaN, the string is 4 or if all the characters are numbers.

In case everything is correct, it will see if the numbers correspond the same as with the secret number. What it does is look if the same number (character) is present in the same position as in the secret code or if the character is present somewhere else. Remember that the secret number does not repeat number.

If the number of hits in position is equal to the length of the secret number (4), it means that the input is correct and that the number has been found. In this case, what is done is to increase the number of victories and the table is cleared for the next game.

Otherwise, if the number of correct positions is lower, it means that it has not yet been found. What is done then is to add the input to the table also adding how many hits in position and how many hits in existence of the number there have been, to help the user in the next round to try again, also increasing the round counter.
If the round counter reaches the limit, a message that the user has lost is skipped, incrementing the loss counter and clearing the table for the next game.

Every time a new game is started, a new random secret code is created. To ensure that the number is not repeated, what is done is to create a list of numbers from 0 to 9 and 4 of those numbers are chosen at random. Each time one of these numbers is chosen, it is removed from the list, eliminating the possibility of being chosen again.


## EXTRA: funMode
598 / 5.000
Resultados de traducción
We have added a little easter egg which is the FunMode. To activate it, since it is initially deactivated, in the input of numbers, you must enter the word "Fun". What will happen now is that certain numbers will bring up messages that will reference popular culture. Some of these, being less than 4 figures, in order to be entered you have to put zeros to be able to complete them: as with the number 3, you have to put "0003" so that it can be detected.
Numbers like 2020, 3, 1984 or 42 are included.

To deactivate the FunMode already started, "NoFun" must be entered.
