import "./App.css";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [emoji2, setEmoji2] = useState("excited");
  //const [checked, updateCheckedStatus] = useState(false);
  const [checked, updateCheckedStatus] = useReducer(checked => !checked, false);

  useEffect(() => {
    console.log(`It's ${emoji2} here!!!`)
  }, [emoji2])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad....")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("Not excited")}
      >
        Excited
      </button>
      <h1>Whats the mood of emoji2 ?</h1>
      <h2>Mood of emoji2 is {emoji2}</h2>
      <button onClick={() => setEmoji2("Super Excited")}>SuperExcited</button>
      <h1>Learn Reducer</h1>
      <input type="checkbox"
        value={checked}
        onChange={updateCheckedStatus}>
      </input>
      {checked ? "Field Checked" : "Field Not Checked"}
    </div>
  );
}

export default App;
