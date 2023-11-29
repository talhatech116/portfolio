import React from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/intro';
import Experience from './components/experience/Experience';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />  
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
export default App;

