
import './App.css';
import { Layout } from './components/Home';

function App() {
  return (
    <div className="App">
    <Layout text={"text 1"} />
    <Layout text={"text 2"}/>
    <Layout text={"text 3"}/>
    </div>
  );
}

export default App;
