import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Banner from './components/Banner/Banner';

import bannerJpg from './assets/banner.jpg';
import bannerWebp from './assets/banner.webp';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results" element={<Results />} />          
          <Route path="*" element={<Home />} />
        </Routes>

        <Banner img={bannerJpg} imgWebp={bannerWebp} link="#" />

        <Footer />
      </Router>
    </>
  );
}

export default App;
