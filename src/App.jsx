import { HelmetProvider } from 'react-helmet-async';
import CyberBackground from './components/CyberBackground';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="relative bg-gray-900 text-white">
        <CyberBackground />
        <NavBar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;