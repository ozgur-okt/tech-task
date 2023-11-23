import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
