/* In this file we would learn about the JSON format Javascript object Notation 
In JSON we if at all we would need to covnert from json to JSON String then we use the
JSON.Stringify() object which gives us the json string format

We need to change it to string format because if at all we need to write data in any files or through
streams they work only with strings instead of JSON so in order to save data using the file stream in 
node application we would be coverting to json string using stringify option

At a later point of time if we need to convert the Json string object to JSON objet then 
we use the JSON.parse(JSONstringObj) which gives us the JSON object*/

const book={
 title:'You can Win it',
 Author:'Shiv Khera'
}

// Creating a file and writing JSON object into it
const fs =require('fs')
// fs.writeFileSync('1-json',JSON.stringify(book))

databuffer = fs.readFileSync('1-json')
// Here while fetching the data form the file it will done in the form of buffer or bits
// so that the reason why you see the digits in the databuffer output
console.log('databuffer object while reading from file through fs module:',databuffer);
// in order to convert the databuffer to string we can use the tostring method or jsonparse() method
console.log('tostring on databuffer :',databuffer.toString());

// so in order to convert the databuffer to the json you need to use the parse() method on the data
console.log('Json parse used on databuffer : ',JSON.parse(databuffer))

//Observe the difference between the json object and the json string object
console.log('Json parse object :',JSON.parse(databuffer))
console.log('Json string object :',JSON.stringify(JSON.parse(databuffer)))

data = JSON.parse(databuffer)
data.title = "I am changing title";

fs.writeFileSync('1-json',JSON.stringify(data))