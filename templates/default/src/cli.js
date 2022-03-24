import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";

import process from "process";

import { data } from "./config.js";

process.stdout.write("\x1b[2J");

const box = boxen(`${data.name} - ${data.email} \n ${data.bio}`, {
  padding: 1,
  margin: 1,
  borderStyle: "round",
});

console.log(chalk.green(box));

createPromptModule()([
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: "Send me an email?",
        value() {
          open(`mailto:${data.email}`);
          console.log(data.farewell);
        },
      },
      {
        name: "Exit",
        value() {
          console.log(data.farewell);
        },
      },
    ],
  },
]).then((answer) => answer.action());
