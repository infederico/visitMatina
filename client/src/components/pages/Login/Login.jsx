import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ValidationLogIn from './Validation/validationLogIn'
import useLocalStorage from '../../localStorage/useLocalStorage'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../redux/userActions'
const LogIn = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
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
    let userObject = jwt_decode(response.credential)
    setGoogleUser(userObject)
    document.getElementById('signInDiv').hidden = true
    navigate('/dashboard')
  }
  const handleSingOut = () => {
    setGoogleUser({})
    document.getElementById('signInDiv').hidden = false
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
    google.accounts.id.prompt()

    if (remember.email) {
      setUserData((prevState) => ({
        ...prevState,
        email: remember.email,
        password: remember.password,
      }))
      setRememberButton(() => true)
    }
  }, [remember.email, user])

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
      dispatch(getUser(userData))
      if (rememberButton) {
        // guardar la información en el almacenamiento local
        setRemember({ email: userData.email, password: userData.password })
      } else {
        // eliminar la información del almacenamiento local
        setRemember({ email: '', password: '' })
      }
      if (user.admin === true) {
        navigate('/dashboard')
      }
    }
  }
  const handleChecked = () => {
    rememberButton ? setRememberButton(false) : setRememberButton(true)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'space-between',
      }}
    >
      <div>
        <img
          style={{
            position: 'absolute',
            left: '10rem',
            maxHeight:
              '80vh' /* Establece la altura máxima de la imagen al 100% de la altura visible del escritorio */,
            width: '37rem',
          }}
          src='https://i.pinimg.com/564x/c3/02/4b/c3024bc95c94ca75a0f71f41ca6815ef.jpg'
          alt='hojas'
        />
      </div>
      <div
        className='card'
        style={{
          width: '22rem',
          position: 'absolute',
          left: '60%',
          transform: 'translateX(-50%)',
        }}
      >
        <h1>Bienvenido</h1>
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
        <button
          onClick={handleClick}
          style={{ position: 'relative', zIndex: 1 }}
        >
          Ingresar
        </button>
        <br />

        <div id='signInDiv'></div>
        {Object.keys(googleUser).length !== 0 && (
          <button
            type='button'
            class='btn btn-outline-secondary'
            onClick={() => {
              handleSingOut()
            }}
          >
            Cerrar sesion
          </button>
        )}

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
