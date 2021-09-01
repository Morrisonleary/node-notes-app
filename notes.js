const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'This is my first note!'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    // node inspect  app.js add --title="Courses" --body="Node Js"
    // chrome://inspect/#devices

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        savedNotes(notes)
        console.log(chalk.green.inverse('new note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }


}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        savedNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }


}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes '))
    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}