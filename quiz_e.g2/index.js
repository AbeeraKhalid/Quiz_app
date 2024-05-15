#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=medium&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let response = await fetchQuiz.json();
    return response.results;
};
let data = await fetchData(apiLink);
// console.log(data.results);
let Start_Quiz = async () => {
    let Score = 0;
    let User_name = await inquirer.prompt([
        {
            name: "username",
            type: "input",
            message: "Enter your Name:",
        },
    ]);
    for (let i = 1; i < 6; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let Ans = await inquirer.prompt({
            name: "Quiz",
            type: "list",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (Ans.Quiz == data[i].correct_answer) {
            ++Score;
            console.log(chalk.bold.italic.blue("Correct answer!"));
        }
        else {
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Dear ${chalk.italic.greenBright(User_name.username)},
          Your Score is ${chalk.red.bold(Score)} out of ${chalk.redBright.bold("5")}`);
};
Start_Quiz();
