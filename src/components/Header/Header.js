import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoWhite from '../../images/logo-white.svg';
import userPhoto from '../../images/user.svg';
import { SectionS1, SectionS2 } from './Style';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <SectionS1>
        <img src={ logoWhite } alt="logo-trybetunes" id="logo" />

        <div>
          <img src={ userPhoto } alt="user" id="user-photo" />
          <p>user@email.com</p>
        </div>
      </SectionS1>

      <SectionS2>
        <div onClick={ () => navigate('/search') }>
          <p>Search</p>
        </div>

        <div onClick={ () => navigate('/favorites') }>
          <p>Favorites</p>
        </div>

        <div onClick={ () => navigate('/profile') }>
          <p>Profile</p>
        </div>
      </SectionS2>
    </header>
  );
}

export default Header;
