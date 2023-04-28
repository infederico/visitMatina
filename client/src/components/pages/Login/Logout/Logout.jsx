import { logOut } from '../../../../redux/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LogOutUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/login')
  }
  return (
    <button
      type='button'
      className='btn btn-outline-secondary'
      onClick={() => {
        handleLogOut()
      }}
    >
      Cerrar sesion
    </button>
  )
}

export default LogOutUser
