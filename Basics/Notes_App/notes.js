/*In order to interact with the file system or to that matter to any npm modules or your own code written 
in any external file or in order to use the external module we need to use the require module 
which is present in node.In

Here in this example we are interacting with the file system with the help of filesystem module 
present in the Node, in order to get help with existing function in nodejs. We can use the help of the 
docs present in the node js link and selecting the fs module.*/

//Importing the fs module using require
const fs = require('fs');
// we can uncomment below line if the file is not already created
//fs.writeFileSync('Notes.txt','This is my first Notes file creation through Node!!!')

/*Note : The 'fs' string should be found out correctly with respect to the module which you are importing
Note : If the file is not present while using the WriteFileSync function it creates a file. */

/*Now we use the append function to append some data without append if we use the write file sync
again then it overwrites the existing data*/

fs.appendFileSync('Notes1.txt',' Appending the data through appendFileSync !!!')
/*Note : If there is wrong in the file name if there is no matching occurs in the appendFileSync
then it creates a new file*/