import getNotes from "./generator";
import { useState } from "react";

function App() {
  let [chords, setChords] = useState([]);
  let [bars, setBars] = useState(4);
  return (
    <div className="App">
      <div className="main">
        <div className="progression">
          {chords.map(c => {
            return <div className="chord">{c.note}<code>{c.type}</code> </div>
          })}
        </div>
        <div className="controls">
          <button type="submit" onClick={() => setChords(getNotes(bars))}>GENERATE</button>
          <input type="number" id="bars" name="bars" min={1} max={32} onChange={(e) => setBars(e.target.value)} />
        </div>
      </div>

    </div>
  );
}

export default App;
