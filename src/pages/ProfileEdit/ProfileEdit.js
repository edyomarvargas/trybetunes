import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AppContext from '../../context/AppContext';
import userPhoto from '../../images/user2.svg';
import { Div } from './Style';

function ProfileEdit() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    image: '',
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, setDescription, setCameFromProfileEdit } = useContext(AppContext);

  useEffect(() => {
    setIsEmailValid(false);
  }, []);

  const handleChange = ({ target }) => {
    setUserInfo({
      ...userInfo,
      [target.name]: target.value,
    });
  }

  const handleSubmit = () => {
    setUser({
      ...user,
      name: userInfo.name,
      email: userInfo.email,
      image: userInfo.image,
    });
    setCameFromProfileEdit(true);
    navigate('/profile');
  }

  const handleBlur = () => {
    const validateEmail = /\S+@\S+\.\S+/;
    if (validateEmail.test(userInfo.email)) {
      setIsEmailValid(false);
      setIsDisabled(false);
    } else {
      setIsEmailValid(true);
      setIsDisabled(true);
    };
    console.log('aqui');
  }

  return (
    <section>
      <Header />

      <Div>
        <div>
          <img src={ user.image.length > 0 ? user.image : userPhoto } alt="usuario" />
          <input type="text" name="image" placeholder="Insira um link..." onChange={ handleChange } />
        </div>

        <form onSubmit={ handleSubmit }>
          <h3>Nome</h3>
          <p>Fique à vontade para usar seu nome social</p>
          <input type="text" name="name" onChange={ handleChange } />

          <h3>E-mail</h3>
          <p>Escolha um e-mail que consulte diariamente</p>
          <input type="text" name="email" onChange={ handleChange } onBlur={ handleBlur } />
          {isEmailValid && <p className="email-check">Insira um endereço de e-mail válido...</p>}

          <h3>Descrição</h3>
          <textarea rows="6" cols="40" placeholder="Sobre mim..." onChange={ ({ target }) => setDescription(target.value) } />

          <button type="submit" disabled={ isDisabled }>Salvar</button>
        </form>
      </Div>

    </section>
  );
}

export default ProfileEdit;
