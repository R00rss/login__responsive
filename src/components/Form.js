import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='form__container'>
      <form className='needs-validation'>
        <div className="form__head">
          <h1 className="form__title">Bienvenid/a</h1>
        </div>
        <div className="form__body">
          <div className="form__field">
            <label htmlFor="user">Usuario</label>
            <input type="email" placeholder='example@example.com' name='user' className="user" required/>
          </div>
          <div className="form__field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder='***********' name='password' className="form__password" required />
          </div>
          <div className="button__container">
            <button className='button__login'>Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form