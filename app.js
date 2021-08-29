const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'add new a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'show list of notes',
    handler() {
        notes.listNotes()
    }
})

// create read command 
yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// const msg = getNotes();

// console.log(msg)

// console.log(validator.isURL('mail.com'));

// const chalkMessage = chalk.green('success!');

// console.log(chalkMessage)

// console.log(process.argv);
// console.log(yargs.argv);
// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

yargs.parse();