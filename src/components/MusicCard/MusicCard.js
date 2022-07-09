import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addSong, readFavoriteSongs } from '../../services/favoriteSongsAPI';
// import Loading from './Loading';

function MusicCard({ trackId, music, player }) {
  // const [loading, setLoading] = useState(false);
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
    const { trackId } = this.props;

    const check = favorites.some((favSong) => favSong.trackId === trackId);

    setIsFav(check);
  }

  return (
    <section>
      <p>{music}</p>
      <audio data-testid="audio-component" src={player} controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
      <label htmlFor="favorite">
        Favorita
        <input
          data-testid={`checkbox-music-${trackId}`}
          type="checkbox"
          name="favorite"
          onChange={handleChange}
          checked={isFav}
        />
      </label>
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
