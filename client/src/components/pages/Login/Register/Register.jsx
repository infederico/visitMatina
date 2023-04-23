import { useState } from 'react'
import ValidationRegister from '../Validation/validationRegister'
import { addUser } from '../../../../redux/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
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
      dispatch(addUser(userData))
      alert('Registro exitoso')
      navigate('/login')
      setUserData({
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      })
    }
  }
  return (
    <div>
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
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Confirma Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            name='confirmEmail'
            value={userData.confirmEmail}
            onChange={handleInputChange}
          />
          {errors.confirmEmail ? errors.confirmEmail : null}
        </div>
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
        <label>Confirma contrasena</label>
        <input
          name='confirmPassword'
          type='password'
          value={userData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword ? errors.confirmPassword : null}
        <br />
        <button onClick={handleClick}>Registrarme</button>
      </div>
    </div>
  )
}

export default Register
