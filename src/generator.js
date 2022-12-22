const notes = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
const types = ["Maj7", "m7", "7", "m7b5", "dim", "aug"];
const triads = ["", "m", "dim", "aug"];
const joe = ["", "m", "7"];

export default function getNotes(bars) {
    let i = 0;
    let chords = [];
    while (i < bars) {
        let n = Math.round(Math.random() * 11);
        let x = Math.round(Math.random() * 5);
        chords.push({
            note: notes[n],
            type: types[x]
        })
        i++
    }
    return chords;
}
