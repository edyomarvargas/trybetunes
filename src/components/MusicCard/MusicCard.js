import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addSong, readFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import { Div } from './Style';
import { AiFillHeart } from 'react-icons/ai';

function MusicCard({ trackId, music, player, index, musics }) {
  const [favorites, setFavorites] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favoriteSongs = async () => {
      const favoriteSongs = await readFavoriteSongs();
      setFavorites(favoriteSongs);
    }
    favoriteSongs();
  }, []);

  useEffect(() => {
    isChecked();
  }, [favorites]);

  const handleClick = async () => {
    setIsFav(!isFav);

    if (!isFav) {
      addSong(musics);
    }

    if (isFav) {
      removeSong(musics)
    }
  }

  const isChecked = () => {
    const check = favorites.some((favSong) => favSong.trackId === trackId);

    setIsFav(check);
  }

  return (
    <section>
      { index === 0 && <hr />}
      <Div>
        <p>{music}</p>
        <audio src={player} controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <AiFillHeart
          size="26px"
          className={ isFav ? 'favorite' : 'not-favorite'}
          onClick={ handleClick }
        />
      </Div>
      <hr />
    </section>
  );
}

MusicCard.propTypes = {
  music: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  musics: PropTypes.arrayOf.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
