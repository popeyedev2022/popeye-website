import './App.css';
import About from './components/about/About';
import Brand from './components/brand/Brand';
import Chars from './components/characters/Chars';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';
import Roadmap from './components/roadmap/Roadmap';
import Tokenomic from './components/tokenomic/Tokenomic';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Brand/>
      <div className='content-wrap'>
       <About/>
       <Chars/>
       <Tokenomic/>
       <Roadmap/>
       <Partners/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
