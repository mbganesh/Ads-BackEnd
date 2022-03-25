import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
import SmartClass from './Components/SmartClass';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path='/scr' element={<SmartClass/>}/>
          <Route exact path='/' element={<Footer/>}/>
          <Route exact path='/t' element={<Testimonial/>}/>
          <Route exact path='/a' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      </div>

    );
}

export default App;
