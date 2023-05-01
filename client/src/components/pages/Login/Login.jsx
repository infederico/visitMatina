import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ValidationLogIn from './Validation/validationLogIn';
import useLocalStorage from '../../localStorage/useLocalStorage';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getUser, authGoogle } from '../../../redux/userActions';
import style from './login.module.css';
import Footer from '../../common/Footer/Footer';
import { arrayRedes } from '../../pages/comoLlegar/arrayRedes';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [rememberButton, setRememberButton] = useState(false);
  const [remember, setRemember] = useLocalStorage('remember', '');
  const clientId =
    '235430067730-qgst6qpfa35tc79r22dh8lqidm9p1qak.apps.googleusercontent.com';
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleCallbackResponse = async (response) => {
    let userObject = jwt_decode(response.credential);
    dispatch(authGoogle(userObject));
    document.getElementById('signInDiv').hidden = true;
    navigate('/');
  };

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      // 13 es el código para la tecla "Enter"
      handleClick(event);
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    // google.accounts.id.prompt()
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      type: 'standard',
      theme: 'filled_black',
      size: 'medium',
      text: 'signin_with',
      shape: 'rectangle',
      logo_alignment: 'center',
      width: '350',
    });

    if (remember.email) {
      setUserData({
        email: remember.email,
        password: remember.password,
      });
      setRememberButton(() => true);
    }
  }, [remember.email]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      ValidationLogIn({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (Object.keys(userData).length > 1) {
      if (Object.keys(errors).length === 0) {
        dispatch(getUser(userData));
        if (rememberButton) {
          // guardar la información en el almacenamiento local
          setRemember({ email: userData.email, password: userData.password });
        } else {
          // eliminar la información del almacenamiento local
          setRemember({ email: '', password: '' });
        }
        navigate('/');
      }
    } else {
      alert('Completa todos los campos');
    }
  };

  const handleChecked = () => {
    rememberButton ? setRememberButton(false) : setRememberButton(true);
  };

  return (
    <div>
      <div className={`${style.containerContact} card-body p-4`}>
        <img
          src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798177/fondologin_irxhjq.jpg'
          alt='Imagen'
          className={`${style.responsiveImage} img-fluid`}
        />
        <div className='card-body p-4'>
          <div className={`card ${style.formColumn}`}>
            <h2 className={`text-center mb-4 `}>Bienvenido</h2>
            <form>
              <div className='form-group' id='signInDiv'></div>
              <div className='form-group'>
                <label htmlFor='email' className='form-label text-center'>
                  Email
                </label>
                <input
                  autoComplete='off'
                  type='email'
                  className='form-control border-0 border-bottom'
                  id='email'
                  placeholder='ingrese su email'
                  name='email'
                  value={userData.email}
                  onChange={handleInputChange}
                />
                <br />
                {errors.email ? errors.email : null}
                <br />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='form-label'>
                  Contrasena
                </label>
                <input
                  autoComplete='off'
                  type='password'
                  className='form-control border-0 border-bottom'
                  id='formGroupExampleInput2'
                  placeholder='ingrese su contrasena'
                  name='password'
                  value={userData.password}
                  onChange={handleInputChange}
                  onKeyDown={(event) => handleKeyDown(event)}
                />
                <br />
                {errors.password ? errors.password : null}
                <br />
              </div>
              <label className='form-check-label' htmlFor='autoSizingCheck'>
                <input
                  className='form-check-input form-control border-10 border-bottom'
                  type='checkbox'
                  checked={rememberButton}
                  id='autoSizingCheck'
                  onChange={handleChecked}
                />
                Recordarme
              </label>
              <br />
              <br />
              <button
                className={`btn btn-dark  ${style.submitButton}`}
                style={{ width: '22rem' }}
                onClick={handleClick}
                disabled={errors.email || errors.password ? true : false}
              >
                Ingresar
              </button>
              <br />

              <br />

              <Link to='/register'>
                <button
                  className={`btn btn-dark ${style.submitButton}`}
                  style={{ width: '22rem' }}
                >
                  No tienes cuenta? Registrate
                </button>
              </Link>
            </form>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/dfnw2l08x/image/upload/v1682798177/fondologin_irxhjq.jpg'
          alt='Imagen'
          className={`${style.responsiveImage} img-fluid`}
        />
      </div>
      <Footer socialmedia={arrayRedes} />
    </div>
  );
};

export default LogIn;
