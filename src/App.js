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
        <Route path='/' exact={'true'} component={BannerArt} />
        <Route path='/' exact={'true'} component={FeaturedDish} />
        <Route path='/' exact={'true'} component={OpenHoursBanner} />
        <Route path='/menu/:path' component={SingleDish} />
        <Route path='/menu' exact={'true'} component={Menu} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
