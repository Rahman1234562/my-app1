import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) => {
     setAlert({
      msg : message,
      type  : type
     })

     setTimeout(() =>{
      setAlert(null);

     },1500)
  }
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils Dark mode";
      showAlert("Dark mode have been enabled ", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils Light mode";
      showAlert("Light mode have been enabled", "success");
    }
  }

  return <>

  {/* title and about going on props that take Navbar is props */}
  <Router>
   <Navbar title = "textUtils1" about = "About" mode={mode} toggle= {toggleMode}/> 
   <Alert  alert = {alert}/>
   <div className="container my-4">
      <Routes>
          <Route exact path="/about" element={<About />}/>

          <Route exact path="/" element= {   <TextForm showAlert = {showAlert} heading = "Enter text to analyze below" mode={mode}/>}/>
            

          </Routes>
   </div>
   </Router>
 
  </>
}

export default App;
