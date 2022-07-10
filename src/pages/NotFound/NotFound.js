import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Div } from './Style';
import logo from '../../images/logo.svg';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Section>
      <img src={ logo } alt="logo-trybetunes" />

      <Div>
        <h1>Ops!</h1>
        <p>A página que você está procurando não foi encontrada.</p>
      </Div>

      <button type="button" onClick={ () => navigate('/search') }>
        Voltar ao início
      </button>
    </Section>
  );
}

export default NotFound;
