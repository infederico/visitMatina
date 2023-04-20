import { useState } from 'react'
import ValidationContact from '../Login/Validation/validationContact'

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    description: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirmEmail: '',
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
        confirmEmail: '',
        description: '',
      })
    }
  }

  return (
    <div>
      <div class='card mb-3'>
        <img
          src='https://images.hola.com/images/0278-15e7c52b0b2f-3217791b5b42-1000/fullpage-1900/hoviajes-costa-rica.jpg'
          class='card-img-top'
          alt='...'
        />
        <div
          class={`card`}
          style={{
            width: '33rem',
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img
            alt='headerImage'
            className={`img-fluid `}
            src={
              'https://images.hola.com/images/0278-15e7c52b0b2f-3217791b5b42-1000/fullpage-1900/hoviajes-costa-rica.jpg'
            }
          />
          <div className='card-body'>
            <h1
              style={{
                width: 'fit-content',
                position: 'absolute',
                top: '0%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '4rem',
                padding: '0',
              }}
            >
              Contacto
            </h1>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' className='form-label'>
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
              <label for='exampleFormControlInput1' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='name@example.com'
                name='email'
                value={userData.email}
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
                value={userData.ConfirmEmail}
                onChange={handleInputChange}
              />
              {errors.confirmEmail ? errors.confirmEmail : null}
            </div>
            <div className='mb-3'>
              <label for='exampleFormControlTextarea1' className='form-label'>
                Consulta
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='description'
                type='text'
                value={userData.description}
                onChange={handleInputChange}
                style={{ resize: 'none' }}
              ></textarea>
              {errors.description ? errors.description : null}
              <br />
              <button onClick={handleClick}>Enviar consulta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
