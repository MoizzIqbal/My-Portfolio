import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { useEffect } from 'react';
// import WOW from 'wowjs';
import 'animate.css';
import './assets/Style.css'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import myprofile from "./assets/img/pic.png";
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Service from './Components/Service'
import Contact from './Components/Contact'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // useEffect(() => {
  //   new WOW.WOW({
  //     live: false, // Disable live updates (improves performance)
  //   }).init();
  // }, []);

  return (
    <>
    <Router>
    <Navbar />
    <FloatingWhatsApp 
    accountName = "Mr. Moiz Iqbal"
    avatar={myprofile}
    statusMessage= "Online"
    phoneNumber ="+923124040210"
    notification={true} 
    />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/resume'  element={<Resume />}/>
        <Route path='/portfolio'  element={<Portfolio />}/>
        <Route path='/services'  element={<Service />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
    </Router>

    {/* <Navbar />
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Service />
    <Contact /> */}
    
    
    </>
  )
}

export default App
