//import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../../../assets/images/matina_logo.png';
// import LogOutUser from '../pages/Login/Logout/Logout';
import { logOut } from '../../../redux/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  //const dispatch = useDispatch();
  //const location = useLocation();
  const loggedUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };

  const rootElement = document.getElementById('root');
  const translateElement = document.createElement('div');
  rootElement.appendChild(translateElement);
  document
    .getElementById('head-element')
    .insertAdjacentHTML(
      'beforeend',
      '<style>.goog-te-banner-frame {background-color: #003459 !important; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2) !important;} .goog-te-menu-value:hover {background-color: #214368 !important;} .goog-te-menu2 {background-color: #003459 !important; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2) !important;}</style>'
    );
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navBarCustom}`}
    >
      <div className='container'>
        <NavLink
          className='navbar-brand'
          to='/'
          onClick={() => {
            if (!collapsed) {
              setCollapsed(true);
            }
          }}
        >
          <img src={Logo} alt='Visit_Matina_Logo' className={styles.navlogo} />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded={!collapsed}
          aria-label='Toggle navigation'
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className={`navbar-nav ms-auto ${styles.text}`}>
            <li>
              <div
                className={`nav-link ${styles.text} ${styles.google}`}
                id='google_translate_element'
              ></div>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className={`nav-link ${styles.text}`}
                to='/'
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/aboutUs'
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/comollegar'
              >
                Cómo llegar
              </NavLink>
            </li>
            {/* esta ruta aún no existe */}

            <li className='nav-item dropdown'>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link dropdown-toggle'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dónde ir
              </NavLink>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <NavLink
                    onClick={() => setCollapsed(true)}
                    className='dropdown-item'
                    to='/fincaMandira'
                  >
                    Finca Mandira
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setCollapsed(true)}
                    className='dropdown-item'
                    to='/fincaLaParcela'
                  >
                    Finca La Parcela
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setCollapsed(true)}
                    className='dropdown-item'
                    to='/AventurasDelCaribe'
                  >
                    Aventuras del Caribe
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className='dropdown-item' to='/artesaniasMarYLuna'>
                    Artesanías Mar y Luna
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link dropdown-toggle'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Gastronomía
              </NavLink>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <NavLink
                    onClick={() => setCollapsed(true)}
                    className='dropdown-item'
                    to='/restaurantSolyLuna'
                  >
                    Restaurante Sol y Luna
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link dropdown-toggle'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Hospedaje
              </NavLink>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <NavLink
                    onClick={() => setCollapsed(true)}
                    className='dropdown-item'
                    to='/hopedajeClaroDeLuna'
                  >
                    Claro de Luna
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/Tours'
              >
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/paquetes'
              >
                Paquetes
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/blog'
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setCollapsed(true)}
                className='nav-link'
                to='/contacto'
              >
                Contacto
              </NavLink>
            </li>
            {loggedUser.admin ? (
              <li>
                <NavLink
                  onClick={() => setCollapsed(true)}
                  className='nav-link'
                  to='/admin'
                >
                  Admin
                </NavLink>
              </li>
            ) : null}
            {loggedUser.access ? (
              <li>
                <NavLink
                  className='nav-link'
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Cerrar sesión
                </NavLink>
              </li>
            ) : (
              <li>
                {' '}
                <NavLink
                  onClick={() => setCollapsed(true)}
                  className='nav-link'
                  to='/login'
                >
                  Ingresar
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
