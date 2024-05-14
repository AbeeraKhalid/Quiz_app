#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magentaBright("Welcome To My Quiz Test App:"));
let scores = 0;
let qno_1 = await inquirer.prompt([{
        name: "Ques1",
        type: "list",
        message: "Which of the following is the correct abbreviation of COMPUTER?",
        choices: ["Commonly Occupied Machines Used in Technical and Educational Research",
            "Commonly Operated Machines Used in Technical and Educational Research",
            "Commonly Oriented Machines Used in Technical and Educational Research"]
    }]);
if (qno_1.Ques1 == "Commonly Operated Machines Used in Technical and Educational Research") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
let qno_2 = await inquirer.prompt([{
        name: "Ques2",
        type: "list",
        message: "Which of the following language does the computer understand?",
        choices: ["Javascript", "HTML5", "C", "C++", "All Of the above"],
    }]);
if (qno_2.Ques2 == "All Of the above") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
let qno_3 = await inquirer.prompt([{
        name: "Ques3",
        type: "list",
        message: " Which of the following is the brain of the computer?",
        choices: ["Central Processing Memory", "Central Processing Unit",
            "Arithmetic and Logic unit", "Control unit",],
    }]);
if (qno_3.Ques3 == "Central Processing Unit") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
let qno_4 = await inquirer.prompt([{
        name: "Ques4",
        type: "list",
        message: "Which of the following is a worldwide network of computers?",
        choices: ["LAN(localAreaNetwork)", "WAN(WideAreaNetwork)", "GAN(GlobalAreaNetwork)", "NoneOfThese"],
    }]);
if (qno_4.Ques4 == "GAN(GlobalAreaNetwork)") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
let qno_5 = await inquirer.prompt([{
        name: "Ques5",
        type: "list",
        message: "Which of the following is the process of finding errors and fixing them within a program",
        choices: ["Compiling", "Executing", "Debugging", " Scanning"],
    }]);
if (qno_5.Ques5 == "Debugging") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
let qno_6 = await inquirer.prompt([{
        name: "Ques6",
        type: "list",
        message: " A loop that never ends is referred to as(an)",
        choices: [
            "While loop", "Infinite loop", "Recursive loop", "for loop"
        ]
    }]);
if (qno_6.Ques6 == "Infinite loop") {
    console.log(chalk.green.bold(`Your Answer is Correct`));
    scores++;
}
else {
    console.log(chalk.red.bold(`Your Answer is InCorrect`));
}
if (scores >= 5) {
    console.log(chalk.bold.italic.green("Congratulations You win this quiz!"));
    console.log(chalk.bold.italic.green(`your scores are ${scores}`));
}
else {
    console.log(chalk.bold.italic.red(" You Lost this quiz!"));
    console.log(chalk.bold.italic.magenta(`Your Scores:${scores}`));
}
