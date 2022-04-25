import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Myskills from './components/Myskills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Myskills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
