import { logOut } from '../../../../redux/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LogOutUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }
  return (
    <button
      type='button'
      class='btn btn-outline-secondary'
      onClick={() => {
        handleLogOut()
      }}
    >
      Cerrar sesion
    </button>
  )
}

export default LogOutUser
