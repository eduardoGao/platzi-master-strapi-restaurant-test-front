import React from 'react'

function AddRestaurant() {
  const handleChange = (e) => {
    // [e.target.name]: e.target.value
  }

  return (
    <form>
      <div>
        <label htmlFor=''>Restaurant</label><br />
        <input type='text' name='restaurant' />
      </div>
      <div>
        <label htmlFor=''>Descripción</label><br />
        <input type='text' name='description' />
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  )
}

export default AddRestaurant
