import React from 'react'
import Restaurants from './components/Restaurants'
import AddRestaurant from './components/AddRestaurant'

function App() {
  return (
    <div className="bg-indigo-100">
      <AddRestaurant />
      <h1 className='m-4 font-extrabold my-5 text-indigo-700 text-2xl tracking-wider text-center'>Los mejores restaurantes</h1>
      <Restaurants />
    </div>
  );
}

export default App;
