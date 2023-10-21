import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CyberFPSGameplay from './components/CyberFPSGameplay';
import AboutUs from './components/AboutUs';
import CryptoStraps from './components/CryptoStraps ';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Header />}></Route>
        <Route path='/CyberFPSGameplay' exact element={<CyberFPSGameplay />}></Route>
        <Route path='/CryptoStraps' exact element={<CryptoStraps />}></Route>
        <Route path='/Team' exact element={<Team />}></Route>
        <Route path='/Faq' exact element={<Faq />}></Route>
        <Route path='Footer' exact element={<Footer />}></Route>
      </Routes>
      {/* <Header /> */}
      <CyberFPSGameplay />
      <AboutUs />
      <CryptoStraps />
      <Team />
      <Faq />
      <Footer />
    </div>
  )
}

export default App