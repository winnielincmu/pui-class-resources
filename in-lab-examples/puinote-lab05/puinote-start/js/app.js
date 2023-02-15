// standardizing properties of notecard class, filled with individual notecard elements

class Notecard {
    constructor(imageURL, title, body) {
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = null;
    }
}

// make a set (no duplicates) of notecards to modify (add, delete)

const notecardSet = new Set()

// function to make new notecard, adds it to the set, returns the element to be called by other functions and code

function addNewNote(imageURL, title, body) {
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
    return notecard;
}

// example notecards that are made, should pass in necessary parameters

const notecardOne = addNewNote(
    "assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
);

const notecardTwo = addNewNote(
    "assets/warhol-frog.png",
    "The second note title",
    "The second note body"
);

// calls to make physical copies of the notecards in the set to be displayed on the DOM

for (const notecard of notecardSet) {
    console.log(notecard);
    createElement(notecard);
}

// tester to create a new notecard and make it appear on the DOM

const testNote = addNewNote('./assets/warhol-eagle.png', 'title three', 'body three');
createElement(testNote);

// function to create notecard on DOM

function createElement(notecard) {
    
    // references notecard template (after modifying HMTL) and makes a clone of it

    const template = document.querySelector('#notecard-template');
    const clone = template.content.cloneNode(true);

    // connects back to notecard class, clone acts as layout and style identifier for each notecard in set

    notecard.element = clone.querySelector('.notecard');

    // links delete icon to the function that deletes the notecard from the DOM on click

    const btnDelete = notecard.element.querySelector('.icon-delete');
    btnDelete.addEventListener('click', () => {
        deleteNote(notecard);
    });

    // references list of notecards from DOM (notecard set acts as data backup) and adds the notecard with the cloned template
    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.prepend(notecard.element);

    // calls to update the DOM with new notecard properties

    updateElement(notecard);
}

// function to delete a notecard from the set (removes data) and from the DOM (removes appearence)

function deleteNote(notecard) {
    notecard.element.remove();
    notecardSet.delete(notecard);
}

// will update webpage with new notecard properties that are different than the template (different image and text)

function updateElement(notecard) {

    // created constants for each property of the notecard that we need

    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');

    // assign notecard properties with what we need

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}