import React from 'react';
import Navbar from './components/header';
import Menu from './components/menu';
import './App.css';
import Testimonials from './components/Testimonials'
import Gallery from './components/gallery'
import Contact from './components/contact';
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
