# Wine Shop Kata

### Problem description

Create a simple application with the following features:

     - Deposit into Account
     - Withdraw from an Account
     - Print a bank statement to the console

## Acceptance criteria

Le but est de calculer la valeur d'un achat chez un caviste. Exemple :

Statement should have transactions in the following format:

```
  NAME             | NUMBER | UNIT PRICE (€)
  Cheval Blanc     |      2 |         990.00
  Chartreuse Verte |      1 |          39.50
  Clairette de Die |     12 |           4.65
```

Total price = 2075.3€

## Starting point and constraints

Start with a class the following structure:

    public class Account {

        public void deposit(int amount);

        public void withdrawal(int amount);

        public void printStatement();

    }

You are not allowed to add any other public method to this class.

**NOTE:** In order to keep the exercise simple, use _number_ for money and _string_ for dates.
Also, you can ignore the formatting of the statement (spaces between pipes and words, etc).

### Objective

Learn and practice the double loop of TDD
Test application from outside by starting with writting an acceptance test, identifying side effects

---
### Credits

Coming from Sandro Mancuso repo https://github.com/sandromancuso/bank-kata-outsidein-screencast

### Useful link:

 - Sandro Mancuso github repository https://github.com/sandromancuso/bank-kata-outsidein-screencast

 - Youtube videos 
    1. Part 1: https://www.youtube.com/watch?v=XHnuMjah6ps
    2. Part 2:
    3. Part 3:
