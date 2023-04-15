import { useState } from 'react'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div>
      <h1>Aqui estara el registro</h1>
      <br />
      <label>Nombre</label>
      <input name='email' type='text' value='' onChange='' />
      <br />
      <label>Email</label>
      <input name='email' type='text' value='' onChange='' />
      <br />
      <label>Contrasena</label>
      <input name='contrasena' type='password' onChange='' />
      <br />
      <button onClick={() => alert('se registro exitosamente')}>
        Registrarme
      </button>
    </div>
  )
}

export default Register
