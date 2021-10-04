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