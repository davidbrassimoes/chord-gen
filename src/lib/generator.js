const notes = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"]
const types = ["Maj7", "m7", "7", "m7b5", "dim", "aug"]

export default function getNotes(bars, i = 0) {
  let chords = []
  while (i < bars) {
    let n = Math.round(Math.random() * 11)
    let x = Math.round(Math.random() * 5)
    chords.push({
      note: notes[n],
      type: types[x],
      code: (n + x + i) * (Math.round(Math.random() * 10000000) + 1),
      index: i,
    })
    i++
  }
  return chords
}
