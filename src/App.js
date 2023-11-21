import TopBar from './components/TopBar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  return (
    <>
      <TopBar />
      <Home />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
