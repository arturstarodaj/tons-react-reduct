import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import ProductDetails from './components/products/ProductDetails'
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Tons - Products Browser" />
            <div className="container-fluid pt-5 mt-2">
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/product/:id" component={ProductDetails} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
