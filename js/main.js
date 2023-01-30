class Piano {
    constructor() {
        this.notes = document.querySelectorAll(".note");
    }

    setNotes() {
        this.notes.forEach(note => note.addEventListener('click', this.playNote));
    }
    playNote(ev) {
        let note = ev.target.dataset.note;
        let audio = document.querySelector(`audio[data-note=${note}]`);
        audio.play()
    }
}


