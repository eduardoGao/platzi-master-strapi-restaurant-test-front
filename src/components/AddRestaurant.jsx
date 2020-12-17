import React, { useState } from 'react'

function AddRestaurant() {
  const [form, setForm] = useState({
    name: '',
    description: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  // http://localhost:1337/restaurants

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form)
    fetch('http://localhost:1337/restaurants', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.ok ? alert('Solicitud enviada') : alert('Algo falló'))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='restaurant'>Restaurant</label><br />
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='description'>Descripción</label><br />
          <input type='text' name='description' id='description' onChange={handleChange} />
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
      {/* <span>{response.ok ? 'Solicitud enviada' : 'Algo falló'}</span> */}
    </>
  )
}

export default AddRestaurant
