import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import HeroBanner from './components/body/HeroBanner';
import CompanyInfo from './components/body/CompanyInfo';
import LatestNews from './components/body/LatestNews';
import Reference from './components/body/Referance';
import NewsLetter from './components/body/NewsLetter';
import Footer from './components/footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Navbar />
      <HeroBanner />
      <CompanyInfo />
      <LatestNews />
      <Reference />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
