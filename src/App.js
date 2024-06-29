import './App.css';
import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Intro from './component/Intro';
import Specials from './component/Specials';
import Testimonials from  './component/Testimonials'
import AllChefs from './component/AllChefs';




function App() {
  
  // console.log

  return (
    <div className="">
      <Header />
      <Intro/>
      <Specials />
      <Testimonials />
      <AllChefs />
      <Footer />
    </div>
  );
}

export default App;
