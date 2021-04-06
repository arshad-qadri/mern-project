import { Switch, Route } from 'react-router';
import './App.css';
import './css/Common.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
    </>
  );
}

export default App;
