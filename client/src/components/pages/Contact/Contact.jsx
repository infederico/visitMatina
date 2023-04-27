import { useState } from 'react'
import ValidationContact from '../Login/Validation/validationContact'
import { useDispatch } from 'react-redux'
import { PostContact } from '../../../redux/contactActions'
import styles from './ShopContact.module.css'
import axios from 'axios'

const Contact = () => {

  const dispatch = useDispatch();

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
  
  const handleClick = async () => {
    if (Object.keys(errors).length === 0) {
     const respuesta= await dispatch(PostContact(userData))
     alert(respuesta)
      setUserData({
        name: '',
        correoxres: '',
        confirmEmail: '',
        mensaje: '',
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
                className='form-control'
                name='name'
                type='text'
                value={userData.name}
                onChange={handleInputChange}
              />
              <br />
              <div className={styles.mensajeerror}>
              {errors.name ? errors.name : null}
              </div>
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
                name='correoxres'
                value={userData.correoxres}
                onChange={handleInputChange}
              />
              {errors.correoxres ? errors.correoxres : null}
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
              <div className={styles.mensajeerror}>
              {errors.confirmEmail ? errors.confirmEmail : null}
              </div>
            </div>
            <div className='mb-3'>
              <label for='exampleFormControlTextarea1' className='form-label'>
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
              <div className={styles.mensajeerror}>
              {errors.mensaje ? errors.mensaje : null}
              </div>
              <br />
              <button class="btn btn-outline-success" onClick={handleClick}>Enviar consulta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
