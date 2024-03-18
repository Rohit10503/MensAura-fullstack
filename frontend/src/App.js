//import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import Footer from './components/footer';
import Register from './pages/register';
import Login from './pages/login';
import Banner from './components/banner';
import Shop from './pages/shop/Index';
import About from './pages/about';
import Visit from './pages/visit/visit';
import Cart from './pages/cart';
import Payment from './pages/payment';
import Orders from './pages/orders';
import Profile from './pages/profile';




function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/visit/:id" element={<Visit/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/order" element={<Orders/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="*" element={<Home/>}/>
        


        
      </Routes>
      
     <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
