const fs = require('fs');
const chalk = require('chalk');

function addNote(title, body) {

    const notes = loadNotes();

    const notesWithTitle = notes.filter(function(note){
        return note.title === title;
    });

    if (notesWithTitle.length === 0) {
        //add the note
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('New note saved!'));
    }
    else {
        console.log(chalk.red.inverse('A note with this title already exists!'));
    }
}

function displayNote(title) {

    const notes = loadNotes();

    const notesWithTitle = notes.filter(function(note){
        return note.title === title;
    });

    if (notesWithTitle.length === 0) {
        console.log('No note with this title exists!');
    }
    else {
        console.log('Title:', notesWithTitle[0].title, '| Body:', notesWithTitle[0].body);
    }
}


function removeNote(title) {
    const notes = loadNotes();

    const notesWithoutTitle = notes.filter(function(note){
        return note.title !== title;
    });

    const notesDeleted = notes.length - notesWithoutTitle.length;

    if (notesDeleted === 0) {       
        console.log('There is no note with that title!');
    }
    else { 
        //save the notes without that title
        saveNotes(notesWithoutTitle);

        console.log('Notes deleted: ', notesDeleted);
    }
}

function listNotes() {
    const notes = loadNotes();

    for (let i = 0; i < notes.length; i++) {
        console.log('Title:', notes[i].title, '| Body:', notes[i].body);
    }
}

function loadNotes() {
    try {
        return JSON.parse(fs.readFileSync('NoteStore.json').toString());
    }
    catch(e){
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync('NoteStore.json', JSON.stringify(notes));
}

module.exports = {
    addNote: addNote,
    displayNote: displayNote,
    removeNote: removeNote,
    listNotes: listNotes
}