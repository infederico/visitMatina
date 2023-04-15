import { useState } from 'react'
import ValidationContact from '../Login/Validation/validationContact'

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    description: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  })

  const handleInputChange = (event) => {
    event.preventDefault()
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(
      ValidationContact({
        ...userData,
        [event.target.name]: event.target.value,
      })
    )
  }
  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      alert('consulta enviada')
      setUserData({
        name: '',
        email: '',
        description: '',
      })
    }
  }

  return (
    <div
      className='card'
      style={{
        width: '18rem',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <h1>Contactanos</h1>
      <br />
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        value={userData.name}
        onChange={handleInputChange}
      />
      {errors.name ? errors.name : null}
      <br />
      <label>Email</label>
      <input
        name='email'
        type='text'
        value={userData.email}
        onChange={handleInputChange}
      />
      {errors.email ? errors.email : null}
      <br />
      <label>Consulta</label>
      <textarea
        name='description'
        type='text'
        value={userData.description}
        onChange={handleInputChange}
        style={{ resize: 'none' }}
      />
      {errors.description ? errors.description : null}
      <br />
      <button onClick={handleClick}>enviar consulta</button>
    </div>
  )
}

export default Contact
