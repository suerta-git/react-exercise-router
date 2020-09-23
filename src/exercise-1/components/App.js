import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';

class App extends Component {
  state = {
    page: 'home'
  }

  render() {
    return (
      <div className="app">
        <Header page={this.state.page}/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path='/my-profile' component={MyProfile} />
          <Route path='/about-us' component={AboutUs} />
        </Router>
      </div>
    );
  }
}

export default App;
