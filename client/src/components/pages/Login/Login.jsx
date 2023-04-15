import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ValidationLogIn from './Validation/validationLogIn'

const LogIn = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    event.preventDefault()
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(
      ValidationLogIn({ ...userData, [event.target.name]: event.target.value })
    )
  }

  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      navigate('/dashboard')
    }
  }

  return (
    <div>
      <h1>Bienvenido Administrador</h1>
      <div className='mb-3'>
        <label htmlFor='formGroupExampleInput' className='form-label'>
          Email
        </label>
        <input
          type='text'
          class='form-control'
          id='formGroupExampleInput'
          placeholder='ingrese su email'
          name='email'
          value={userData.email}
          onChange={handleInputChange}
        />
        <br />
        {errors.email ? errors.email : null}
        <br />
      </div>
      <div>
        <label htmlFor='formGroupExampleInput2' className='form-label'>
          Contrasena
        </label>
        <input
          type='password'
          class='form-control'
          id='formGroupExampleInput2'
          placeholder='ingrese su contrasena'
          name='password'
          value={userData.password}
          onChange={handleInputChange}
        />
        <br />
        {errors.password ? errors.password : null}
        <br />
      </div>
      <label>Recordarme</label>
      <input name='data' type='checkbox' />
      <button onClick={handleClick}>Ingresar</button>

      <p>aqui voy a entrar con auth google id</p>
      <Link to='/register'>
        <button onClick={() => alert('login exitoso')}>Registrate</button>
      </Link>
    </div>
  )
}

export default LogIn
