import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  // // variation 1--> executes in every render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // })

  //variation 2-> runs only in first render
  //  useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // },[])//the empty array refetrs to empty dependencies, i.e zero dependency

  // //variation 3-> runs in first render + when the dependecy changes
  // useEffect(()=>{
  //   console.log("change observed")
  // },[text])//will run in first render, and also when the value of text is changed

  //variation 4-> the first console.log runs in first render, but when the value of text will be
  //changed, the console.log inside return will run first and then the first console.log will run
  useEffect(() => {
    console.log("listener added");
    return () => {
      console.log("listener is removed"); //this return part is used for cleaning or unmounting process
    };
  }, [text]); //will run in first render, and also when the value of text is changed

  function changeHandler(e) {
    setText(e.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
