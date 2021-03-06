
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import * as notes from "./Notes.js";

const yargs = _yargs(hideBin(process.argv))

yargs.version('1.0.1');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'display',
    describe: 'display the content of a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.displayNote(argv.title);
    }
})

yargs.parse();

// console.log(yargs.argv);
