import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F3]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
