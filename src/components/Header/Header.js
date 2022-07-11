import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import logoWhite from '../../images/logo-white.svg';
import userPhoto from '../../images/user.svg';
import { SectionS1, SectionS2 } from './Style';
import { RiLogoutBoxRLine } from 'react-icons/ri';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useContext(AppContext);

  return (
    <header>
      <SectionS1>
        <img src={ logoWhite } alt="logo-trybetunes" id="logo" />

        <section>
          <div>
            <img
              src={ user.image.length > 0 ? user.image : userPhoto }
              alt="user"
              id="user-photo"
            />
            <p>{ user.name }</p>
          </div>
          <RiLogoutBoxRLine
            className="logout-btn"
            size="36px"
            onClick={ () => navigate('/')}
          />
        </section>
      </SectionS1>

      <SectionS2>
        <div
          className={ pathname.includes('/search') || pathname.includes('/album') ? 'selected' : 'not-selected' }
          onClick={ () => navigate('/search') }
        >
          <p>Search</p>
        </div>

        <div
          className={ pathname.includes('/favorites') ? 'selected' : 'not-selected' }
          onClick={ () => navigate('/favorites') }
        >
          <p>Favorites</p>
        </div>

        <div
          className={ pathname.includes('/profile') ? 'selected' : 'not-selected' }
          onClick={ () => navigate('/profile') }
        >
          <p>Profile</p>
        </div>
      </SectionS2>
    </header>
  );
}

export default Header;
