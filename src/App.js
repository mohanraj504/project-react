import './App.css';
import Navbar from './components/homepage/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Menu from './components/homepage/Menu';
import { useState } from 'react';
import Login from './components/login/Login';
import Register from './components/registerpage/Register';


function App() {

  const[clicked,isClicked] = useState(false)
  return (
    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="contact-us" element={<ContactUs />} />
      <Route exact path="about-us" element={<AboutUs />}/>
      <Route exact path="sign-in" element={<Login />}/>
      <Route exact path="sign-up" element={<Register />} /> 
      


    </Routes>
    </Router>

  );
}

export default App;