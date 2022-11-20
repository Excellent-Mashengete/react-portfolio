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
      <section className="home"  id="/"><Home /></section>
      <section className="about" style={{backgroundColor: 'yellow'}} id="about"><About /></section>
       {/*   <section className="projects" style={{backgroundColor: 'white'}}id="projects"><Projects /></section>
      <section className="contact" style={{backgroundColor: 'blue'}}id="contact"><Contact /></section>
      <Footer /> */}
    </Router>
  );
}

export default App;
