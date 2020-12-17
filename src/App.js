import React from 'react'
import Restaurants from './components/Restaurants'
import AddRestaurant from './components/AddRestaurant'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddRestaurant />
      <Restaurants />
    </div>
  );
}

export default App;
