import React, { useState, useEffect } from 'react'
import styles from './styles/Restaurants.module.css'

function Restaurants() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
  }, [])

  // console.log(restaurants)

  return (
    <section>
      <h1>Los mejores restaurantes</h1>
      <ul className={styles.restaurants}>
        {restaurants.map((item) => (
          <li key={item.id} className={styles.item}>
            {/* <img src={item.image[0].name} alt={item.alt} /> */}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Restaurants
