import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Banner from './components/Banner/Banner';

import bannerJpg from './assets/banner.jpg';
import bannerWebp from './assets/banner.webp';

import paths from './constants/paths';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path={paths.home.path} element={paths.home.component} />
          <Route path={paths.results.path} element={paths.results.component} />
        </Routes>

        <Banner img={bannerJpg} imgWebp={bannerWebp} link="#" />

        <Footer />
      </Router>
    </>
  );
}

export default App;
