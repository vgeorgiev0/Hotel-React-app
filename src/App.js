import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
