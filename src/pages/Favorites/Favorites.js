import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import { readFavoriteSongs } from '../../services/favoriteSongsAPI';

function Favorites() {
  const [favSongs, setFavSongs] = useState([]);

  useEffect(() => {
    const getFavSongs = readFavoriteSongs();
    setFavSongs(getFavSongs);
  }, []);

  return (
    <div>
      <Header />

      {favSongs && (
          <div>
            {
              favSongs.map((song, index) => (
                <MusicCard
                  key={song.trackId}
                  trackId={song.trackId}
                  music={song.trackName}
                  player={song.previewUrl}
                  musics={song}
                  index={ index }
                />
              ))
            }
          </div>)}
    </div>
  );
}

export default Favorites;
