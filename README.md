[![Netlify Status](https://api.netlify.com/api/v1/badges/4495d5d1-f807-4452-91a4-3118c473da54/deploy-status)](https://app.netlify.com/sites/dice-game-2020/deploys)

# DICE GAME

## [ Check out the deployed version here! ](https://dice-game-2020.netlify.com/)

## What this project is about

Build a Multi-player game (2 people) with React and Redux.

## Instructions

1. Navigate to the [repository](https://github.com/dung-phan/dice-game-manager)
2. Clone locally using
   `git@github.com:dung-phan/dice-game-manager.git`
3. Install dependencies using `npm install`
4. Start your server using `npm start`
5. Navigate to app in [browser](http://localhost:3000)
6. Enjoy!

## Technologies used

I used the following technologies: HTML, SASS, React and Redux
I used [create-react-app](https://goo.gl/26jfy4) to generate the scaffolding for this app.

#### 👀 Click links to view some samples in this project 👇

- **[react](./src/components/Control.js)**
- **[redux](./src/reducers/table.js)**
- **[redux-thunk](./src/actions/startgame.js)**
- **[SASS](./src/scss/pages/_gamescreen.scss)**

## Game guidelines:

- In order to play the game, players need to sign up and sign in.
- After signing in, players can choose to join an empty or waiting table. (A waiting table means one player already joined)
- When two players are ready, the game can get started.

## Rules:

- In total, there are 10 dices rolled. Each player can only see the results of 5 dices on their part. They have to guess the number (X) of dice (Y) on the table. For example, there are 4 times of dice 6 in total on the table.
- The game can continue with both players guessing the results. Or, one player can choose to challenge the bid of the other player, and the game will end. If the bid from player A, for example, is smaller or equal to the real results, A will win.
