import { Link } from 'react-router-dom'
import { useState } from 'react'

const LogIn = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = () => {}
  return (
    <div>
      <div>
        <h1>Aqui va el login</h1>
        <label>Email</label>
        <input
          placeholder='ingrese su email'
          name='email'
          type='text'
          value=''
          onChange={handleInputChange}
        />
        <br />
        <label>Contrasena</label>
        <input
          placeholder='ingrese su contrasena'
          name='contrasena'
          type='password'
          onChange=''
        />
        <br />
        <label>Recordarme</label>
        <input name='data' type='checkbox' />
        <button onClick={() => alert('login exitoso')}>Ingresar</button>
      </div>
      <p>aqui voy a entrar con auth google id</p>
      <Link to='/register'>
        <button onClick={() => alert('Nos manda a la pagina de registro')}>
          Registrate
        </button>
      </Link>
    </div>
  )
}

export default LogIn
