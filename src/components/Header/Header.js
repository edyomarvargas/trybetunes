import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../images/logo-white.svg';
import userPhoto from '../../images/user.svg';
import { SectionS1 } from './Style';

function Header() {
  return (
    <header>
      <SectionS1>
        <img src={ logoWhite } alt="logo-trybetunes" id="logo" />

        <div>
          <img src={ userPhoto } alt="user" id="user-photo" />
          <p>user@email.com</p>
        </div>
      </SectionS1>

      <section>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </section>
    </header>
  );
}

export default Header;
