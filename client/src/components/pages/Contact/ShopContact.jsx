import { useState } from 'react';
import ValidationContact from '../Login/Validation/validationContact';
import { useDispatch } from 'react-redux';
import { PostContact } from '../../../redux/contactActions';
import styles from './ShopContact.module.css';
import AlertContact from './AlertContact';

const ShopContact = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    correoxres: '',
    confirmEmail: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    correoxres: '',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      ValidationContact({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleClick = async () => {
    if (Object.keys(errors).length === 0) {
      const respuesta = await dispatch(PostContact(userData));
      setAlertMessage(respuesta);
      setShowAlert(true);
      
      setUserData({
        name: '',
        correoxres: '',
        confirmEmail: '',
        mensaje: '',
      });
    }
  };

  return (
    <div className={styles.containerContact}>
      <div className='card border-0 '>
        <div
          className='card-body '
          style={{
            backgroundColor: 'var(--quaternary-color-0)',
          }}
        >
          <h1>Contacto</h1>
          <div className={`mb-3`} >
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Nombre
            </label>
            <br />
            <input
              style={{
                backgroundColor: 'transparent',
              }}
              className='border-0 border-bottom'
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
              style={{
                backgroundColor: 'transparent',
              }}
              type='email'
              className='form-control border-0 border-bottom'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
              name='correoxres'
              value={userData.correoxres}
              onChange={handleInputChange}
            />
            {errors.email ? errors.email : null}
          </div>
          <div className=''>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Confirma Email
            </label>
            <input
              style={{
                backgroundColor: 'transparent',
              }}
              type='email'
              className='form-control border-0 border-bottom'
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
              style={{ resize: 'none', backgroundColor: 'transparent' }}
            ></textarea>
            {errors.mensaje ? errors.mensaje : null}
            <br />
            <button
              className={`btn btn-primary ${styles.submitButton}`}
              onClick={handleClick}
            >
              Enviar consulta
            </button>
            {showAlert && (
              <AlertContact
                show={showAlert}
                onClose={handleCloseAlert}
                message={alertMessage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContact;
