const fs = require('fs')

const AddNote = function (title,body){
    const notes = loadNotes()
    notes.push(
        {
          'title':title,
          'body':body
        })
    SaveNote(notes)
}
function SaveNote(notes){
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

module.exports = {
 addNote : AddNote,
 loadNotes:loadNotes
}