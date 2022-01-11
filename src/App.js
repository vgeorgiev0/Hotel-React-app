import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import v1rt from './images/V1rtuoso.gif';

import Loading from './components/Loading';

import Error from './pages/Error';

import ScrollToTop from './ScrollToTop';

import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

import bgFlag from './images/flag/bgFlag.png';
import rsFlag from './images/flag/rsFlag.png';
import usFlag from './images/flag/usFlag.png';

const Restaurant = React.lazy(() => import('./pages/Restaurant'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const Home = React.lazy(() => import('./pages/Home'));
const SingleRoom = React.lazy(() => import('./pages/SingleRoom'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
      <Suspense fallback={<Loading />}>
        <Switch>
          <ScrollToTop>
            <Route exact path='/' component={Home} />
            <Route exact path='/restaurant' component={Restaurant} />
            <Route exact path='/apartments/' component={Rooms} />
            <Route exact path='/apartments/:slug' component={SingleRoom} />
            <Route exact path='/contact' component={Contact} />
          </ScrollToTop>
          <Route component={Error} />
        </Switch>
      </Suspense>
      <Footer />
      <div>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://v1rtuoso.eu/'
        >
          <p
            style={{
              position: 'revert',
              textShadow: '2px 2px #1976d2',
              textAlign: 'center',
              bottom: '0px',
              fontSize: '10px',
              left: '50%',
              color: 'white',
              backgroundColor: 'black',
            }}
          >
            Made by V1rtuoso
          </p>
          <img
            style={{
              position: 'relative',
              width: '100%',
              height: '1vh',
              bottom: '0px',
            }}
            src={v1rt}
            alt='v1rtuoso'
          />
        </a>
      </div>
    </div>
  );
}

export default App;
