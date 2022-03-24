import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import OurClients from './Components/OurClients';
import About from './Components/About';
import SmartClass from './Components/SmartClass';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path='/scr' element={<SmartClass/>}/>
          <Route exact path='/' element={<Footer/>}/>
          <Route exact path='/1' element={<OurClients/>}/>
          <Route exact path='/2' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      </div>

    );
}

export default App;
