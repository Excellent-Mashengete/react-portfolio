import Home from "./components/Home/home";
import Header from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer"
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import {  BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <section id="/"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer /> 
    </Router>
  );
}

export default App;
