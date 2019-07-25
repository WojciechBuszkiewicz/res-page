import React from 'react';
import './App.css';
import Header from './components/Header';
import BannerArt from './components/BannerArt'
import OpenHoursBanner from './components/OpenHoursBanner'
import Footer from './components/Footer'
import FeaturedDish from './components/FeaturedDish'
import SingleDish from './components/SingleDish'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import { Route } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Route path='/res-page' exact={'true'} component={BannerArt} />
        <Route path='/res-page' exact={'true'} component={FeaturedDish} />
        <Route path='/res-page' exact={'true'} component={OpenHoursBanner} />
        <Route path='/res-page/menu/:path' component={SingleDish} />
        <Route path='/res-page/menu' exact={'true'} component={Menu} />
        <Route path='/res-page/gallery' component={Gallery} />
        <Route path='/res-page/contact' component={Contact} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
