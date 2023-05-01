import { useState } from 'react';
import ValidationRegister from '../Validation/validationRegister';
import { addUser } from '../../../../redux/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import Footer from '../../../common/Footer/Footer';
import { arrayRedes } from '../../comoLlegar/arrayRedes';
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
        className={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%', marginLeft: '.5%' }}
      />
      <img
        src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798064/fondoregistroreal_s6icep.jpg'
        className={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%' }}
      />
      <img
        src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798064/fondoregistroreal_s6icep.jpg'
        className={` ${styles.backgroundImage} img-fluid`}
        alt='...'
        style={{ width: '33%' }}
      />
      {/* <div className='card-body p-4'></div> */}
      <div className={`card ${styles.cardContainer}`}>
        <h2 className={`text-center mb-4 ${styles.registrationTitle}`}>
          Registro
        </h2>
        <br />

        <div class='form-group'>
          <label for='name' className={styles.registrationLabel}></label>
          <input
            class='form-control'
            id='name'
            placeholder='Nombre'
            name='name'
            type='text'
            value={userData.name}
            onChange={handleInputChange}
            className={styles.registrationInput}
          />
          {errors.name ? (
            <p className={styles.registrationLabel}>{errors.name}</p>
          ) : null}
        </div>
        <br />
        <br />
        <div class='form-group'>
          <label for='email' className={styles.registrationLabel}></label>
          <input
            type='email'
            class='form-control'
            id='email'
            placeholder='Correo electrónico'
            name='email'
            value={userData.email}
            onChange={handleInputChange}
            className={styles.registrationInput}
          />
          {errors.email ? (
            <p className={styles.registrationLabel}>{errors.email}</p>
          ) : null}
          <br />
        </div>
        <div class='form-group'>
          <label for='email' className={styles.registrationLabel}></label>
          <input
            class='form-control'
            id='email'
            placeholder='Confirma Correo electrónico'
            type='email'
            name='confirmEmail'
            value={userData.confirmEmail}
            onChange={handleInputChange}
            className={styles.registrationInput}
          />
          {errors.confirmEmail ? (
            <p className={styles.registrationLabel}>{errors.confirmEmail}</p>
          ) : null}
        </div>
        <br />
        <div class='form-group'>
          <label for='password' className={styles.registrationLabel}></label>
          <input
            class='form-control'
            id='password'
            placeholder='Contraseña'
            name='password'
            type='password'
            value={userData.password}
            onChange={handleInputChange}
            className={styles.registrationInput}
          />
          {errors.password ? (
            <p className={styles.registrationLabel}>{errors.password}</p>
          ) : null}
        </div>
        <br />
        <div class='form-group'>
          <label className={styles.registrationLabel}></label>
          <input
            name='confirmPassword'
            placeholder='Confirma Contraseña'
            type='password'
            value={userData.confirmPassword}
            onChange={handleInputChange}
            className={styles.registrationInput}
          />
          {errors.confirmPassword ? (
            <p className={styles.registrationLabel}>{errors.confirmPassword}</p>
          ) : null}
          <br />
          <button
            type='submit'
            className={`btn btn-primary btn-block mt-4 ${styles.registrationButton}`}
            onClick={handleClick}
          >
            Registrarme
          </button>
        </div>
      </div>
      <Footer socialmedia={arrayRedes} />
    </div>
  );
};

export default Register;
