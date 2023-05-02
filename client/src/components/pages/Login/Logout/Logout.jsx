import { useEffect } from 'react'
import { logOut } from '../../../../redux/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
const LogOutUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect( () => {
    return () => navigate('/')
  }, []);

  const handleLogOut = () => {
    dispatch(logOut())
  };

  return (
    <NavLink className='nav-link' onClick={handleLogOut}>
    Cerrar sesión
    </NavLink>
  );
};

export default LogOutUser;
