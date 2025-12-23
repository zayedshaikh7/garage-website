import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import GetInTouch from './components/GetInTouch';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      
      <GetInTouch />
      
      <Footer />
    </div>
  );
}

export default App;
