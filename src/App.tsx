import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Review from './components/Review';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-600 selection:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Review/>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;