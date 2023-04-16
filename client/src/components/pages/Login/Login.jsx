import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ValidationLogIn from './Validation/validationLogIn'
import useLocalStorage from '../../localStorage/useLocalStorage'
import jwt_decode from 'jwt-decode'

const LogIn = () => {
  const navigate = useNavigate()
  const [googleUser, setGoogleUser] = useState({}) // esto lo voy a cambiar a reduxtoolkit para enviarlo al back
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [rememberButton, setRememberButton] = useState(false)
  const [remember, setRemember] = useLocalStorage('remember', '')

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token ' + response.credential)
    let userObject = jwt_decode(response.credential)
    console.log(userObject)
    setGoogleUser(userObject)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '235430067730-qgst6qpfa35tc79r22dh8lqidm9p1qak.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    })
    if (remember.email) {
      setUserData((prevState) => ({
        ...prevState,
        email: remember.email,
        password: remember.password,
      }))
      setRememberButton(() => true)
    }
  }, [remember.email])

  const handleInputChange = (event) => {
    event.preventDefault()
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(
      ValidationLogIn({ ...userData, [event.target.name]: event.target.value })
    )
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      if (rememberButton) {
        // guardar la información en el almacenamiento local
        setRemember({ email: userData.email, password: userData.password })
      } else {
        // eliminar la información del almacenamiento local
        setRemember({ email: '', password: '' })
      }
      navigate('/dashboard')
    }
  }
  const handleChecked = () => {
    rememberButton ? setRememberButton(false) : setRememberButton(true)
  }

  return (
    <div>
      <div
        className='card'
        style={{
          width: '20rem',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h1>Bienvenido Administrador</h1>
        <div className='mb-3'>
          <label htmlFor='formGroupExampleInput' className='form-label'>
            Email
          </label>
          <input
            autoComplete='off'
            type='text'
            className='form-control'
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
            autoComplete='off'
            type='password'
            className='form-control'
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
        <label className='form-check-label' htmlFor='autoSizingCheck'>
          <input
            className='form-check-input'
            type='checkbox'
            checked={rememberButton}
            id='autoSizingCheck'
            onChange={handleChecked}
          />
          Recordarme
        </label>
        <br />
        <button onClick={handleClick}>Ingresar</button>
        <br />

        <div id='signInDiv'></div>
        <br />
        <Link to='/register'>
          <button onClick={() => alert('nos envia a la pagina de registro')}>
            No tienes cuenta? Registrate
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LogIn
