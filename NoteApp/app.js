
const yargs = require('yargs');

yargs.version('1.0.1');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
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
