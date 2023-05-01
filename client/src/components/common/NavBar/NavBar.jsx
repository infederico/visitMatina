//import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../../../assets/images/matina_logo.png';
import LogOutUser from '../../pages/Login/Logout/Logout';

export default function NavBar() {
  //const dispatch = useDispatch();
  //const location = useLocation();
  const loggedUser = useSelector((state) => state.user.user);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navBarCustom}`}
    >
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src={Logo} alt='Visit_Matina_Logo' className={styles.navlogo} />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className={`navbar-nav ms-auto ${styles.text}`}>
            <NavLink className='nav-link' to='/'>
              Inicio
            </NavLink>
            <NavLink className='nav-link' to='/aboutUs'>
              Nosotros
            </NavLink>
            <NavLink className='nav-link' to='/comollegar'>
              Cómo llegar
            </NavLink>
            {/* esta ruta aún no existe */}

            <li className='nav-item dropdown'>
              <NavLink
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
                  <NavLink className='dropdown-item' to='/fincaMandira'>
                    Finca Mandira
                  </NavLink>
                </li>
                <li>
                  <NavLink className='dropdown-item' to='/fincaLaParcela'>
                    Finca La Parcela
                  </NavLink>
                </li>
                <li>
                  <NavLink className='dropdown-item' to='/AventurasDelCaribe'>
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
                  <NavLink className='dropdown-item' to='/restaurantSolyLuna'>
                    Restaurante Sol y Luna
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <NavLink
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
                  <NavLink className='dropdown-item' to='/hopedajeClaroDeLuna'>
                    Claro de Luna
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <NavLink className='nav-link' to='/Tours'
              >
                Tours
              </NavLink>
              
            </li>
            <NavLink className='nav-link' to='/paquetes'>
              Paquetes
            </NavLink>
            <NavLink className='nav-link' to='/blog'>
              Blog
            </NavLink>
            <NavLink className='nav-link' to='/contacto'>
              Contacto
            </NavLink>
            {loggedUser.admin ? (
              <NavLink className='nav-link' to='/admin'>
                Admin
              </NavLink>
            ) : null}
            {loggedUser.access ? (
              <LogOutUser />
            ) : (
              <NavLink className='nav-link' to='/login'>
                Ingresar
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
