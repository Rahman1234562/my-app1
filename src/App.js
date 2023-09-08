// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }

  return <>

  {/* title and about going on props that take Navbar is props */}
   <Navbar title = "textUtils1" about = "About" mode={mode} toggle= {toggleMode}/> 
   <div className="container my-4">
      <TextForm heading = "Enter text to analyze below" mode={mode}/>
      {/* <About/> */}
   </div>
 
  </>
}

export default App;
