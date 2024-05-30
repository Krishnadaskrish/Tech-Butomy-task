import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import FrontPage from './Pages/FrontPage';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
