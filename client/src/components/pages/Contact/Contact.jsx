import { useState } from 'react';
import ValidationContact from '../Login/Validation/validationContact';
import { useDispatch } from 'react-redux';
import { PostContact } from '../../../redux/contactActions';
import styles from './Contact.module.css';
import AlertContact from './AlertContact';
import Footer from '../../common/Footer/Footer';
import { arrayRedes } from '../comoLlegar/arrayRedes';

const Contact = () => {
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
  const [alertMessage, setAlertMessage] = useState('');

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleClick = async (event) => {
    event.preventDefault();
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
    <div className={`${styles.pagina}`}>
      <div className={` ${styles.containerContact}  container`}>
        <div className='card border-0'>
          <div
            className='card-body'
            style={{
              backgroundColor: 'var(--quaternary-color-0)',
            }}
          >
            <h1 className='text-center mb-4'>Contacto</h1>
            <form>
              <div className='form-group'>
                <label htmlFor='name'>Nombre</label>
                <input
                  type='text'
                  className='form-control border-0 border-bottom'
                  id='name'
                  name='name'
                  value={userData.name}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                {errors.name && (
                  <div className='text-danger'>{errors.name}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control border-0 border-bottom'
                  id='email'
                  name='correoxres'
                  placeholder='name@example.com'
                  value={userData.correoxres}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                {errors.correoxres && (
                  <div className='text-danger'>{errors.correoxres}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='confirmEmail'>Confirmar Email</label>
                <input
                  type='email'
                  className='form-control border-0 border-bottom'
                  id='confirmEmail'
                  name='confirmEmail'
                  placeholder='name@example.com'
                  value={userData.confirmEmail}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                {errors.confirmEmail && (
                  <div className='text-danger'>{errors.confirmEmail}</div>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='mensaje'>Consulta</label>
                <textarea
                  className='form-control'
                  id='mensaje'
                  rows='3'
                  name='mensaje'
                  value={userData.mensaje}
                  onChange={handleInputChange}
                  style={{ resize: 'none', backgroundColor: 'transparent' }}
                ></textarea>
                {errors.mensaje && (
                  <div className='text-danger'>{errors.mensaje}</div>
                )}
              </div>
              <div className='text-center'>
                <button
                  className={` btn btn-success  ${styles.submitButton}`}
                  onClick={handleClick}
                >
                  Enviar consulta
                </button>
              </div>
            </form>
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
      <div className={styles.footer}>
        <Footer socialmedia={arrayRedes} />
      </div>
    </div>
  );
};

export default Contact;
