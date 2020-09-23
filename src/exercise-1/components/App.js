import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/my-profile' component={MyProfile} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/products/:id' component={Product} />
            <Route path='/products' component={Products} />
            <Redirect from='/goods' to='/products' />
            <Redirect from='/*' to='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
