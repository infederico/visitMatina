import { useState } from 'react'
import ValidationContact from '../Login/Validation/validationContact'
import { useDispatch } from 'react-redux'
import { PostContact } from '../../../redux/contactActions'

const ShopContact = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: '',
    correoxres: '',
    confirmEmail: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    correoxres: '',
    mensaje: '',
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
      dispatch(PostContact(userData))
      console.log({ userData })
      setUserData({
        name: '',
        correoxres: '',
        confirmEmail: '',
        mensaje: '',
      })
    }
  }
  console.log({ userData })
  return (
    <div>
      <div
        className='card'
        style={{
          width: '20rem',
        }}
      >
        <div className='card-body'>
          <h1>Contacto</h1>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Nombre
            </label>
            <br />
            <input
              name='name'
              type='text'
              value={userData.name}
              onChange={handleInputChange}
            />
            <br />
            {errors.name ? errors.name : null}
            <br />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
              name='correoxres'
              value={userData.correoxres}
              onChange={handleInputChange}
            />
            {errors.email ? errors.email : null}
          </div>
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
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Consulta
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              name='mensaje'
              type='text'
              value={userData.mensaje}
              onChange={handleInputChange}
              style={{ resize: 'none' }}
            ></textarea>
            {errors.mensaje ? errors.mensaje : null}
            <br />
            <button onClick={handleClick}>Enviar consulta</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopContact
