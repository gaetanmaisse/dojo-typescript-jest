# Bank Kata

### Problem description

Create a simple bank application with the following features:

     - Deposit into Account
     - Withdraw from an Account
     - Print a bank statement to the console

## Acceptance criteria

Statement should have transactions in the following format:

```
  DATE       | AMOUNT  | BALANCE
  10/04/2014 | 500.00  | 1400.00
  02/04/2014 | -100.00 | 900.00
  01/04/2014 | 1000.00 | 1000.00
```

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
Test application from outside by starting with writting an acceptance test, identifying side effects and hazardous part of code. 

---
### Credits

Sandro Mancuso

### Useful link:

 - Sandro Mancuso github repository https://github.com/sandromancuso/bank-kata-outsidein-screencast

 - Sandro Mancuso live coding (Java), he is focusing on Outside-In TDD 
    1. Part 1: https://www.youtube.com/watch?v=XHnuMjah6ps
    2. Part 2: https://www.youtube.com/watch?v=gs0rqDdz3ko
    3. Part 3: https://www.youtube.com/watch?v=R9OAt9AOrzI
