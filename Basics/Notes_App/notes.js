const fs = require('fs')

const addNote = function (title,body){

    const notes = loadNotes()
    var duplicatenotes = notes.filter(function(note){
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
    console.log("The Notes has been Saved!")
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
    notes=notes.filter(function(note){return note.title!=title})
    saveNote(notes)
    console.log('Notes Removed!!!')
}

module.exports = {
 addNote : addNote,
 loadNotes:loadNotes,
 removeNote : removeNote
}