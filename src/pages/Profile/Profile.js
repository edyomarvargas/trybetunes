import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header/Header';
import userPhoto from '../../images/user.svg';
import { useNavigate } from 'react-router-dom';
import { Section, Div1, Div2 } from './Style';

function Profile() {
  const { user, description } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <Header />

        <Section>
          <Div1>
            <img src={userPhoto} alt="user" />
            <button
              type="button"
              onClick={ () => navigate('/profile/edit') }
            >
              Editar Perfil
            </button>
          </Div1>

          <Div2>
            <h3>Nome</h3>
            <p>{ user.name }</p>

            <h3>E-mail</h3>
            <p>{ user.email ? user.email : 'Edite o perfil para adicionar um e-mail...' }</p>

            <h3>Descrição</h3>
            <p>{ description }</p>
          </Div2>
          
        </Section>
      </main>
    </div>
  );
}

export default Profile;
