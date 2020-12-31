import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Restaurants from './components/Restaurants'
import RestaurantItem from './components/RestaurantItem'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Restaurants} />
          <Route exact path='/restaurants/:id' component={RestaurantItem} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
