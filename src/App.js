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

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Navbar />

      <br />
      <br />
      <div className='language-btn'>
        <button onClick={() => changeLanguage('en')} className='btn-primary'>
          en
        </button>
        <button onClick={() => changeLanguage('bg')} className='btn-primary'>
          bg
        </button>
        <button onClick={() => changeLanguage('bg')} className='btn-primary'>
          srb
        </button>
        <button onClick={() => changeLanguage('bg')} className='btn-primary'>
          it
        </button>
        <button onClick={() => changeLanguage('bg')} className='btn-primary'>
          de
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
    </>
  );
}

export default App;
