import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import login from '../page-style/login.css'
function Login() {
  return (
    <div className='container'>
      <div className="box">
        <h1>Login Page</h1>
        <Input label={'username'} type={'email'} />
        <Input label={'Password'} type={'Password'} />
        <Button name={"Login"} />
      </div>
    </div>
  )
}

export default Login