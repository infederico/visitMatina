import { logOut } from '../../../../redux/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
const LogOutUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/login')
  }
  return (
    <NavLink className='nav-link' onClick={() => {
      handleLogOut()
    }}>
    Cerrar sesión
    </NavLink>
  )
}

export default LogOutUser
