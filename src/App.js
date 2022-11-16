import Home from "./components/Home/home";
import Header from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer"
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import {  BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Resume /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </Router>
  );
}

export default App;
