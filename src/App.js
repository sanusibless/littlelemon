import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Intro from './component/Intro';
import Specials from './component/Specials';
import Testimonials from  './component/Testimonials'
import AllChefs from './component/AllChefs';
import BookDiv from './component/booktable/BookDiv';




function App() {
  return (
    <div className="">
      <Header />
      <Intro/>
      <Specials />
      <Testimonials />
      <BookDiv />
      <AllChefs />
      <Footer />
    </div>
  );
}

export default App;
