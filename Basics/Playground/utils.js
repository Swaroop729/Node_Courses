console.log('Came into utils.js')

const name='swaroop'

/*
Now unless you export the files variables, functions the app.js cannot use the variables or functions
defined in the utils.js even though it is imported through require. This is because the modules in the
Nodejs have it's own scope limitation Means that the values defined in other moduels unless exported in 
the modules the other modules doesn't know about it.

If you want to try it Just try to commet the export function below then you can run and see it.
*/
module.exports=  name