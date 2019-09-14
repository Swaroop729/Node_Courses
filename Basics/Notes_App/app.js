console.log('Coming into app.js')
/* Now if we load the external modules which we defined then we need to show it's path as well so 
if the files are present in the same directory then we need to use the './path/' */
const firstname = require('./utils')

console.log(firstname)