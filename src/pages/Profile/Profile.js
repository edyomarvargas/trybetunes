import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import InfoUpdatePopup from '../../components/InfoUpdatePopup/InfoUpdatePopup';
import Header from '../../components/Header/Header';
import userPhoto from '../../images/user2.svg';
import { useNavigate } from 'react-router-dom';
import { Section, Div1, Div2 } from './Style';

function Profile() {
  const { user, description, cameFromProfileEdit, setCameFromProfileEdit } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCameFromProfileEdit(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main>
        <Header />
        {cameFromProfileEdit && <InfoUpdatePopup />}

        <Section>
          <Div1>
            <img src={ user.image.length > 0 ? user.image : userPhoto } alt="user" />
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
