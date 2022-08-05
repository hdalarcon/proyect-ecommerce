import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:category' element={<Home/>} />
        <Route path='/item/:id' element={<Detail/>} />
        <Route path="/contacto" element={<Contact/>}/>
        <Route path='/nosotros' element={<AboutUs/>}/>
        <Route path='/cart' element={<Checkout />}/>
        <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
 );
}

export default App;
