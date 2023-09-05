import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return <>

  {/* title and about going on props that take Navbar is props */}
   <Navbar title = "textUtils1" about = "About"/> 
   <div className="container my-4">
      <TextForm heading = "Enter text to analyze below"/>
   </div>
 
  </>
}

export default App;
