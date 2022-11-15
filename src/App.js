import Home from "./components/Home/home";
import Header from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
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
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
     <Footer />
    </Router>
  );
}

export default App;
