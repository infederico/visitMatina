import { useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    description: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  })

  return (
    <div>
      <h1>este es mi contacto</h1>
      <br />
      <label>Nombre</label>
      <input name='email' type='text' value='' onChange='' />
      <br />
      <label>Email</label>
      <input name='email' type='text' value='' onChange='' />
      <br />
      <label>Consulta</label>
      <input name='contrasena' type='password' onChange='' />
      <br />
      <button onClick={() => alert('Consulta enviada')}>enviar consulta</button>
    </div>
  )
}

export default Contact
