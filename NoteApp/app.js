
const yargs = require('yargs');

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
    handler: function(argv) {
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('removing note!');
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function() {
        console.log('listing notes!');
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the content of a note',
    handler: function() {
        console.log('reading content of note!');
    }
})

yargs.parse();

// console.log(yargs.argv);
