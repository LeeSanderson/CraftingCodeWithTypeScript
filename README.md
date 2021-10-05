# Code Crafting with TypeScript

A selection of code crafting exercises implemented in TypeScript. Generated from the  [@testdeck/mocha](https://github.com/testdeck/testdeck-mocha-seed) template.

To run all tests with test coverage run

```
npm test
```

You can also start a watcher and continue development. The tests will be rerun as you make changes to your sources.

```
npm run watch
```

## Exercises 
### Exercise 01 - Warm up

Implement a Stack class with the following public methods:
- void push(Object object)
- Object pop()

Stack should throw an exception if popped when empty.


### Exercise 02 - TDD practice (RED, GREEN, REFACTORING)

Implement a Roman numeral converter. The code must be able to take decimals up to 3999
and convert to their Roman equivalent.

```
Conversion Table
    1    - I
    5    - V
    10   - X
    50   - L
    100  - C
    500  - D
    1000 - M
    2499 - MMCDXCIX
    3949 - MMMCMXLIX
```

As a bonus, write a converter that converts a string of Roman numeral characters back into a decimal.

### Exercise 03 - Leap year - Express business rules and domain

Implement a class that checks if a year is a leap year

All the following rules must be satisfied:
- Is NOT a leap year if NOT divisible by 4
- Is a leap year if divisible by 4
- Is a leap year if divisible by 400
- Is NOT a leap year if divisible by 100 but NOT by 400

Examples:
- 1997 is NOT a leap year (not divisible by 4)
- 1996 is a leap year     (divisible by 4)
- 1600 is a leap year     (divisible by 400)
- 1800 is NOT a leap year (divisible by 4, divisible by 100, NOT divisible by 400)

After this exercise watch this [video on Explanatory Methods](https://www.youtube.com/watch?v=sKYX40ltQZM) and review your solution.

## Exercise 04 - Mocking
 		 
Problem description:  Payment service
 		 
Given a user wants to buy her selected items
When she submits her payment details
Then we should process her payment

Acceptance criteria:
- If the user does not exist, an exception should be thrown (validated by a ```UserValidator``` interface) and payment should be sent to the payment gateway.

Create a class with the following signature:

```
public class PaymentService {
    constructor(
        private userValidator: UserValidator,
        private paymentGateway: PaymentGateway) {            
        }

    public processPayment(user: User, paymentDetails: PaymentDetails) {
		// your code goes here
	}
}
```