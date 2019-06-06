import Game from './src/Game/Game';
const inquirer = require("inquirer");

console.log("Shall we play connect-four game?");

inquirer
  .prompt([
    {
      type: 'list',
      name: 'startGame',
      message: 'Shall we play connect-four game?',
      choices: [
        'Yes',
        'No'
      ]
    }
  ])
  .then(answers => {
    if (answers.startGame === "No") {
      console.log('Exiting game! Have a good day!!..:)')
    } else {
      /* TODO: Initiate game */
      const game = new Game();
    }
  });

/* TODO: Play another round or end game */