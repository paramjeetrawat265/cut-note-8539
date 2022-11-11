import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Routes/Allroutes';
import { useLocation } from 'react-router-dom';
function App() {
  const location=useLocation();
  return (
    <div className="App">
      {/* <Navbar /> */}
      {location.pathname === "/dashboard" ? null : <Navbar />}
      <Allroutes />
    </div>
  );
}
export default App;

