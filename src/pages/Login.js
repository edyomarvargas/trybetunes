import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const PASSWORD_MIN_LENGTH = 6;


  const enableButton = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });

    const validateEmail = /\S+@\S+\.\S+/;
    if (validateEmail.test(user.email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    };
  }

  useEffect(() => {
    if (user.password.length >= PASSWORD_MIN_LENGTH && isEmailValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user, isEmailValid]);

  const buttonClick = () => {

    navigate('/search');
  }
  return (
    <div>
      <input
        name="email"
        placeholder="Digite seu e-mail"
        type="text"
        onChange={enableButton}
      />

      <input
        name="password"
        placeholder="Digite sua senha"
        type="password"
        onChange={enableButton}
      />

      <button
        type="button"
        disabled={disabled}
        onClick={buttonClick}
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
