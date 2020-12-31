import React, { useState, useEffect } from 'react'
// import styles from './styles/Restaurants.module.css'

function Restaurants() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
  }, [])

  // console.log(restaurants)

  return (
    <section className='m-4'>
      <ul className=''>
        {restaurants.map((item) => (
          <li key={item.id} className='bg-gray-100 mb-4'>
            <h2 className='font-bold text-xl mb-2 p-3'>{item.name}</h2>
            <p className='px-3'>{item.description}</p>
            <button className='mt-4 py-2 w-full text-white text-sm uppercase font-bold bg-indigo-600'>Ver más</button>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Restaurants
