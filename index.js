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

    } else {
      /* TODO: Ask option of player, computer, smart computer etc */

      /* TODO: Initiate game */
    }
  });

