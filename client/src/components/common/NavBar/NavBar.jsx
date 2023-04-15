//import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation } from 'react-router-dom';

// eslint-disable-next-line
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";


export default function NavBar() {

  //const dispatch = useDispatch();
  //const location = useLocation();


  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Visit Matina</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex">
                    <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/aboutUs">Nosotros</NavLink>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Que hacer
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/AventurasDelCaribe">Aventuras del Caribe</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Donde ir
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/fincaMandira">Finca Santuario</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/fincaLaParcela">Finca Integral</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Gastronomia
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/restaurantSolyLuna">Restaurante Sol y Luna</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hospedaje 
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/hopedajeClaroDeLuna">Claro de Luna</NavLink></li>
                        </ul>
                    </li>
                    <NavLink className="nav-link" to="/paquetes">Paquetes</NavLink>
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                    <NavLink className="nav-link" to="/login">Ingresar</NavLink>
                </div>
            </div>
        </div>
    </nav>
  );
}