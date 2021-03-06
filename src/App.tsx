import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Portifolio } from './components/Portifolio';
import { Testimonials } from './components/Testimonials';
import { Works } from './components/Works';

export function App() {
  return (
    <>
      <Header /> 
      <Nav />
      <About />
      <Experience />
      <Works />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}