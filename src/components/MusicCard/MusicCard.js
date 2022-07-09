import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addSong, readFavoriteSongs } from '../../services/favoriteSongsAPI';
import { Div } from './Style';
import { AiOutlineHeart } from 'react-icons/ai';

function MusicCard({ trackId, music, player, index }) {
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

  const handleChange = async () => {
    const { musics } = this.props;
    setIsFav(!isFav);
    addSong(musics);
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
        <AiOutlineHeart size="26px" className="fav-btn" />
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
