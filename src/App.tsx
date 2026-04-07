import { LanguageProvider } from './context/LanguageProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Strengths from './components/Strengths';
import Activities from './components/Activities';
import Products from './components/Products';
import Markets from './components/Markets';
import Documents from './components/Documents';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
        <Documents />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  );
}

export default App;
