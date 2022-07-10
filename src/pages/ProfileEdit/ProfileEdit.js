import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AppContext from '../../context/AppContext';
import userPhoto from '../../images/user.svg';
import { Div } from './Style';

function ProfileEdit() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const { user, setUser, setDescription } = useContext(AppContext);



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
    });
    navigate('/profile');
  }

  return (
    <section>
      <Header />

      <Div>
        <div>
          <img src={ userPhoto } alt="usuario" />
          <input type="text" placeholder="Insira um link..." />
        </div>

        <form onSubmit={ handleSubmit }>
          <h3>Nome</h3>
          <p>Fique à vontade para usar seu nome social</p>
          <input type="text" name="name" onChange={ handleChange } />

          <h3>E-mail</h3>
          <p>Escolha um e-mail que consulte diariamente</p>
          <input type="text" name="email" onChange={ handleChange } />

          <h3>Descrição</h3>
          <textarea rows="6" cols="40" placeholder="Sobre mim..." onChange={ ({ target }) => setDescription(target.value) } />

          <button type="submit">Salvar</button>
        </form>
      </Div>

    </section>
  );
}

export default ProfileEdit;
