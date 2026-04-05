import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Strengths from './components/Strengths';
import Activities from './components/Activities';
import Products from './components/Products';
import Markets from './components/Markets';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Strengths />
        <Activities />
        <Products />
        <Markets />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
