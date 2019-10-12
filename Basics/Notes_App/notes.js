const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title,body){

    const notes = loadNotes()
    var duplicatenotes = notes.find(function(note){
        // here we can use the filter as well but the filter runs for all the 
        // values present in the list and is time consuming so we  can find which stops when found
      //  var duplicatenotes = notes.filter(function(note){
        return note.title == title;
    })

    if(duplicatenotes.length!=0){
        console.log("The Title has already been taken")
    }
    else{
        notes.push(
            {
              'title':title,
              'body':body
            })
        saveNote(notes)
    }
}
function saveNote(notes){
    fs.writeFileSync('NotesData.json',JSON.stringify(notes))
}

function loadNotes(){
    try{
       databuffer = fs.readFileSync('NotesData.json')
        return JSON.parse(databuffer.toString())
    }
    catch(e){
        return []
    }
}
function removeNote(title){
    notes = loadNotes()
    notestokeep=notes.filter(function(note){return note.title!=title})
    if(notestokeep.length<notes.length){
        saveNote(notestokeep)
        console.log(chalk.green.inverse('Notes Removed!!!'))
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

module.exports = {
 addNote : addNote,
 loadNotes:loadNotes,
 removeNote : removeNote
}