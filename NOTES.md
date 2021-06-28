# User Stories

## US1 🐼

As a user \
I want to create an empty board \
So that I can start to play

### UAT1.1 🐼

Given a click to start \
When I want to play \
Then the game creates an empty board

### UAT1.2 🐼

Given a click to start \
When I want to play \
Then the board needs to be a 3x3 matrix

## US2

As a user \
I would like to see mines and numbers on the board \
So I can win/lose the game

### UAT2.1

Given an empty board \
When I want to play the game \
Then the board need to contain mines

### UAT2.2

Given an empty board \
When I want to play the game \
Then the board needs 3 mines

### UAT2.3

Given a board with mines \
When I want to play the game \
Then the board needs to know the number of adjacent mines

### UAT2.4

Given a board with mines \
When I want to play the game \
Then the board needs to be filled with numbers

## US3

As a user \
I would like to play the game \
So I can have fun

### UAT3.1

Given a filled board \
When I play the game \
Then I would like to be able to play on the board

### UAT3.2

Given a filled board \
When I play the game \
Then I would like to know whether lost or not

# TechDebt

- Can it be bigger/smaller than 3x3? 🐶
- Does it need randomness when it comes to mine? 🐶
- How many mines do the table need? 🐶
- Can be a board without mines? 🐶
- When do I need to populate the board with mines? (first pick -> lose) 🐶
