import React from 'react';
import Header2 from './components/header/Header2';
import Navbar from './components/header/Navbar';
import HeroBanner from './components/body/HeroBanner';
import CompanyInfo from './components/body/CompanyInfo';
import LatestNews from './components/body/LatestNews';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Header2 />
      <Navbar/>
      <HeroBanner/>
      <CompanyInfo/>
      <LatestNews/>
    </div>
  );
}

export default App;
