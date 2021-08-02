import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// components
import Toggle from './components/Toggle';
import Menu from './components/Menu';
// pages
import HomePage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import ContactPage from './pages/ContactPage'

function App() {

  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <div className="App">
      <Toggle handleNavToggle={handleNavToggle}/>
      <Router>
      { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/example" component={ExamplePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
