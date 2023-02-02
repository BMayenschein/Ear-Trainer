class Piano {
    constructor() {
        this.notes = document.querySelectorAll(".note");
        //Lookup table with format of {note:<audio>}
        this.noteTable = {};
        this.notes.forEach(note => {
            this.noteTable[note.dataset.note] = note.querySelector('audio');
        });
    }
    playNote(note) {
        this.noteTable[note].play()
    }
}

class Training {
    constructor() {
        this.piano = new Piano();
        this.startButton = document.querySelector(".start");
        this.startButton.addEventListener('click', () => {
            this.startTraining();
        });
        this.piano.notes.forEach(note => note.addEventListener('mousedown', (ev) => {
            train.piano.playNote(ev.target.dataset.note);
        }))
    }

    randomNote() {
        let allNotes = ['A', 'As', 'B', 'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs']
        let randomNum = Math.floor(Math.random() * allNotes.length);
        let randNote = allNotes[randomNum];
        let correctNote = document.querySelector(`[data-note=${randNote}]`);

        this.piano.playNote(randNote);
        return [randNote, correctNote]
    }

    startTraining() {
        let values = this.randomNote();
        let randomNote = values[0];
        let correctNote = values[1];

        let correctClick = function() {
            console.log('Correct!');
            correctNote.removeEventListener('click', correctClick);
        }
        correctNote.addEventListener('click', correctClick);
        console.log(randomNote);
        console.log(correctNote);
    }
}

let train = new Training();

