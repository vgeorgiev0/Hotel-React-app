import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import About from './pages/About';
import Error from './pages/Error';

import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

import bgFlag from './images/flag/bgFlag.png';
import rsFlag from './images/flag/rsFlag.png';
import usFlag from './images/flag/usFlag.png';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className='language-btn'>
        <button onClick={() => changeLanguage('rs')}>
          <img src={rsFlag} alt='flagRS' />
          rs
        </button>
        <button onClick={() => changeLanguage('en')}>
          <img src={usFlag} alt='flagUS' />
          en
        </button>
        <button onClick={() => changeLanguage('bg')}>
          <img src={bgFlag} alt='flagBG' />
          bg
        </button>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/apartments/' component={Rooms} />
        <Route exact path='/apartments/:slug' component={SingleRoom} />
        <Route exact path='/about' component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
