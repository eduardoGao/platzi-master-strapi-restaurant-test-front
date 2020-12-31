import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function RestaurantItem() {
  const { id } = useParams()
  // console.log(id)

  const [place, setPlace] = useState([])

  useEffect(() => {
    fetch(`http://localhost:1337/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setPlace(data))
  }, [id])

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.description}</p>
    </div>
  )
}

export default RestaurantItem;
