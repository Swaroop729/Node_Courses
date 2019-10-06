/* Using Chalk.js library it is used to prin the text in different colors and in different backgrounds 
so it can help us to differentiate between warnings, Failures, success messages */

//Chalk comes with an easy to use composable API where you just chain and nest the styles you want.

const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));



//Easily define your own themes:

 
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const warning1 = chalk.yellow;
 
console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(warning1('Warning!'));
console.log(chalk.inverse.green.bold('Success!'));
console.log(chalk.inverse.green('Success!'));
