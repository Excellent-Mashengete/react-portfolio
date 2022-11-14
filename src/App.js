import Home from "./components/Home/home";
import Navbar from "./components/navbar/navbar"
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </div>      
    </Router>
  );
}

export default App;
