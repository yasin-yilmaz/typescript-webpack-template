import clone from "lodash/clone";
import chalk from "chalk";

const arr = [1, 2, 3, 4, 5];

const cloneArr = clone(arr);

console.log(cloneArr);

console.log(chalk.bgBlue.white("lorem ipsum"));
