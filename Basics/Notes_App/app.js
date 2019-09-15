

console.log('Coming into app.js')
/* Now if we load the external modules which we defined then we need to show it's path as well so 
if the files are present in the same directory then we need to use the './path/' */
const firstname = require('./utils')

/*Using the Validator by importing it using require.
We can import it using the Import * form Validator like we import in Angular becuase there we are
using the ES6 but in nodejs we are not using the ES6 so we need to import it using require
So if Nodejs also uses ES6 then we can import it in the same way the angular does it*/

const validator = require('validator')
console.log(validator.isEmail("Help@gmail.com"))
console.log(validator.isURL("Help"))

console.log(firstname)

/* In order to install the npm packages we can go for the npmjs websites where we can have several 
packages and we can install and use them in our node application

But firslty in order to use them we need to intiliaze our node application with npm init so that it can
have a package.json and can store the npm modules within that packages.json and also there would
be package-lock json with the vendor who published that packaged with encrypt code and with url and 
version so in future it install same version from same url.*/


/* Input parameters for Node application. */
console.log(process.argv)
