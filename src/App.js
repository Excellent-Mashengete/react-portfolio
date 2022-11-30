
import Home from "./Components/Home/home";
import Header from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer"
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import ScrollToTop from "./Components/ScrollToSection/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
        <section    id='home' ><Home /></section>
        <section whileInView={{ href:'#about'}} id='about'><About /></section>
        <section  whileInView={{ href:'#portfolio'}}id='portfolio'><Projects /></section>
        <section whileInView={{ href:'#contact'}}  id='contact'><Contact /></section>
      <Footer /> 
    </div>
  );
}

export default App;
