let notes = document.querySelectorAll(".note");

notes.forEach(note => note.addEventListener('click', playNote));

function playNote(ev) {
    let note = ev.target.dataset.note
    console.log(note);
    let audio = document.querySelector(`audio[data-note=${note}]`)
    audio.play();
    console.log(audio);
}