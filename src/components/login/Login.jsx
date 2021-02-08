import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../../services';
import style from './login.module.css';

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState('');

  if (authService.validateUserToken()) {
    history.push('/');
  }

  const submit = () => {
    authService.setToken();
  };

  return (
    <div className={style.login}>
      <h1>UNLOCK YOUR HOME</h1>
      <h2>
        Welcome back, <span style={{ color: '#04dac3' }}>Kim</span>
      </h2>
      <form className={style.login_form} onSubmit={submit}>
        <input
          name='password'
          value={password}
          placeholder='Type password here...'
          onChange={e => {
            setPassword(e.target.value);
          }}
          type='password'
        />
        <button type='submit' onClick={null}>
          Authenticate
        </button>
      </form>
    </div>
  );
}

export default Login;
