const fs = require('fs')
const notes = require('./Notes')
const yargs = require('yargs')
yargs.command({
    command :'Add',
    describe:'Adding a new Note',
    builder:{
        title:{
            describe:'Helps Adding a new Note',
            demandOption:true,
            type:'string'

    },     
    body:{
        describe:'Helps Adding a new Note body',
        demandOption:false,
        type:'string'

}
},
    handler: function(yargs){
        notes.addNote(yargs.title,yargs.body)
    }

})

yargs.command({
    command:'LoadAllNotes',
    Describe:'Shows all existing notes',
    type:'string',
    handler: function(){
        const data = notes.loadNotes()
        console.log(JSON.stringify(data))
    }
})

//console.log(yargs.argv)
yargs.parse()
