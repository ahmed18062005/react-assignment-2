import { useState } from "react";
import "./App.css";

function App() {


  const [text, seText] = useState("")
  const [arr, setArr] = useState([])
  const [Edit, setEdit] = useState()

  let add = () => {
    arr.push(text)
    setArr([...arr])
    document.getElementById("inp").value = "";
  }
  let edit = (val) => {
    console.log(val);
  }

  return (
    <div className="main">
      <input style={{ padding: "4px" }} id="inp" onChange={e => { seText(e.target.value) }}
      />
      <button onClick={add} style={{ fontSize: "18px" }}>Add</button>

      {arr.map((x, i) =>
        <p key={i}>{x}<button style={{ margin: "0px 20px" }} onClick={edit(x)}>Edit</button>
          <button>Delete</button></p>
      )}
    </div>
  )
}

export default App;
