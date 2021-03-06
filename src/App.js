import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';

import ReactGA from 'react-ga';

import Navbar from './components/Navbar';

import Footer from './components/Footer';

import v1rt from './images/V1rtuoso.gif';
import bgFlag from './images/flag/bgFlag.png';
import rsFlag from './images/flag/rsFlag.png';
import usFlag from './images/flag/usFlag.png';

const Home = React.lazy(() => import('./pages/Home'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const SingleRoom = React.lazy(() => import('./pages/SingleRoom'));
const Restaurant = React.lazy(() => import('./pages/Restaurant'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Error = React.lazy(() => import('./pages/Error'));

const _ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
};

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    ReactGA.initialize('UA-217800648-1');

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <main>
      <Router>
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
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/restaurant' component={Restaurant} />
            <Route exact path='/apartments/' component={Rooms} />
            <Route exact path='/apartments/:slug' component={SingleRoom} />
            <Route exact path='/contact' component={Contact} />
            <Route path='*' component={Error} />
          </Switch>
        </ScrollToTop>
      </Router>
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
    </main>
  );
}

export default App;
