import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Personal from './Components/Personal'
import About from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <section className='digital_card'>
      <Navbar />
      <Personal />
      <About />
      <Footer />

    </section>

  );
}

export default App;
