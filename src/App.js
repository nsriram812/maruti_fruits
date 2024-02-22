import React from 'react';

import { AboutUs, Word, FindUs, Footer, Gallery, Header, Products, Certification } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Products />
    <Word />
    <Certification />
    <Gallery />
    {/*<Intro />
    <FindUs />*/}
    <Footer /> 
  </div>
);

export default App;
