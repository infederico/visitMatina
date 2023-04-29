import { useState } from 'react';
import ValidationRegister from '../Validation/validationRegister';
import { addUser } from '../../../../redux/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import Footer from '../../../common/Footer/Footer';
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      ValidationRegister({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      dispatch(addUser(userData));
      navigate('/login');
      setUserData({
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      });
    }
  };
  return (
    <div>
      <img
        src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798064/fondoregistroreal_s6icep.jpg'
        classNameName={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%', marginLeft: '.5%' }}
      />
      <img
        src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798064/fondoregistroreal_s6icep.jpg'
        classNameName={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%' }}
      />
      <img
        src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798064/fondoregistroreal_s6icep.jpg'
        classNameName={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%' }}
      />
      <div classNameName='card-body p-4'>
        <div classNameName={`card ${styles.cardContainer}`}>
          <h2 classNameName={`text-center mb-4 ${styles.registrationTitle}`}>
            Registro
          </h2>
          <br />
          <form>
            <div className='form-group'>
              <label
                htmlFor='name'
                classNameName={styles.registrationLabel}
              ></label>
              <input
                className='form-control'
                id='name'
                placeholder='Nombre'
                name='name'
                type='text'
                value={userData.name}
                onChange={handleInputChange}
                classNameName={styles.registrationInput}
              />
              {errors.name ? (
                <p classNameName={styles.registrationLabel}>{errors.name}</p>
              ) : null}
            </div>
            <br />
            <br />
            <div className='form-group'>
              <label
                htmlFor='email'
                classNameName={styles.registrationLabel}
              ></label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Correo electrónico'
                name='email'
                value={userData.email}
                onChange={handleInputChange}
                classNameName={styles.registrationInput}
              />
              {errors.email ? (
                <p classNameName={styles.registrationLabel}>{errors.email}</p>
              ) : null}
              <br />
            </div>
            <div className='form-group'>
              <label
                htmlFor='email'
                classNameName={styles.registrationLabel}
              ></label>
              <input
                className='form-control'
                id='email'
                placeholder='Confirma Correo electrónico'
                type='email'
                name='confirmEmail'
                value={userData.confirmEmail}
                onChange={handleInputChange}
                classNameName={styles.registrationInput}
              />
              {errors.confirmEmail ? (
                <p classNameName={styles.registrationLabel}>
                  {errors.confirmEmail}
                </p>
              ) : null}
            </div>
            <br />
            <div className='form-group'>
              <label
                htmlFor='password'
                classNameName={styles.registrationLabel}
              ></label>
              <input
                className='form-control'
                id='password'
                placeholder='Contraseña'
                name='password'
                type='password'
                value={userData.password}
                onChange={handleInputChange}
                classNameName={styles.registrationInput}
              />
              {errors.password ? (
                <p classNameName={styles.registrationLabel}>
                  {errors.password}
                </p>
              ) : null}
            </div>
            <br />
            <div className='form-group'>
              <label classNameName={styles.registrationLabel}></label>
              <input
                name='confirmPassword'
                placeholder='Confirma Contraseña'
                type='password'
                value={userData.confirmPassword}
                onChange={handleInputChange}
                classNameName={styles.registrationInput}
              />
              {errors.confirmPassword ? (
                <p classNameName={styles.registrationLabel}>
                  {errors.confirmPassword}
                </p>
              ) : null}
              <br />
              <button
                type='submit'
                classNameName={`btn btn-primary btn-block mt-4 ${styles.registrationButton}`}
                onClick={handleClick}
              >
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
