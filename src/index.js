import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from './context';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/Loading';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <RoomProvider>
    <React.StrictMode>
      <Router>
        <Suspense fallback={<Loading className='loading' />}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Suspense>
      </Router>
    </React.StrictMode>
  </RoomProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
