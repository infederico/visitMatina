import { useState } from 'react'
import ValidationRegister from '../Validation/validationRegister'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    event.preventDefault()
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(
      ValidationRegister({
        ...userData,
        [event.target.name]: event.target.value,
      })
    )
  }

  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      alert('Registro exitoso')
      setUserData({
        name: '',
        email: '',
        password: '',
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
      <h1>Registro</h1>
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
      <br />
      <label>Contrasena</label>
      <input
        name='password'
        type='password'
        value={userData.password}
        onChange={handleInputChange}
      />
      {errors.password ? errors.password : null}
      <br />
      <br />
      <button onClick={handleClick}>Registrarme</button>
    </div>
  )
}

export default Register
