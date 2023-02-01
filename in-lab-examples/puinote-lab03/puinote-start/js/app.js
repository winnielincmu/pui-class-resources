console.log('Start Application.');

function updateElement() {
    console.log('Running the updateElement function!');
    const noteImageElement = document.querySelector('.notecard-thumbnail');
    console.log(noteImageElement);
    noteImageElement.src = notecard.noteImageURL;
};

const notecard = {
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
};

updateElement();

