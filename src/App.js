import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Intro from './component/Intro';
import Specials from './component/Specials';
import Testimonials from  './component/Testimonials'

function App() {
  return (
    <div className="">
      <Header />
      <Intro/>
      <Specials />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
