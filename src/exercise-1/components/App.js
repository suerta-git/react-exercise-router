import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path='/my-profile' component={MyProfile} />
          <Route path='/about-us' component={AboutUs} />
        </Router>
      </div>
    );
  }
}

export default App;
