import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Allroutes from './Routes/Allroutes';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Allroutes/>
    </div>
  );
}

export default App;

