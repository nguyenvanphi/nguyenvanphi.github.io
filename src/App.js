import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Infoproduct from './component/Infoproduct';
import Products from './component/Products';
import Cart from './component/Cart';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <Header />
              <Route path='/' exact component={Home} />
              <Route path='/Infoproduct' component={Infoproduct} />
              <Route path='/Products' component={ProductsContainer} />
              <Route path='/Cart' component={CartContainer} />
            <Footer />
          </div>
        </Router>
      );
  }
}
export default App;
