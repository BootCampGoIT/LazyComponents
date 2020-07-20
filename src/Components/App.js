import React from 'react';
import Navigation from './navigation/Navigation';
import { Switch, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';



const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/products" component={ProductsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>


    </>
  );
}

export default App;

