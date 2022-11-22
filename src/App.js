import Home from "./components/Home/home";
import Header from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer"
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./components/ScrollToSection/ScrollToTop";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
        <section id='home'><Home /></section>
        <section id='about'><About /></section>
        <section id='portfolio'><Projects /></section>
        <section id='contact'><Contact /></section>
      <Footer /> 
    </div>
  );
}

export default App;
