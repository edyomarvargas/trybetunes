import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import { readFavoriteSongs } from '../../services/favoriteSongsAPI';
import { Main, Div, P } from './Style';

function Favorites() {
  const [favSongs, setFavSongs] = useState([]);

  useEffect(() => {
    const getFavSongs = readFavoriteSongs();
    setFavSongs(getFavSongs);
  }, []);

  const message = (<P>Você ainda não adicionou nenhuma música aos favoritos.</P>);

  return (
    <section>
      <Header />
      <Div>
        <p>Músicas favoritas:</p>
      </Div>
      <Main>
        {favSongs && favSongs.length > 0 ? (
          <div>
            {
              favSongs.map((song, index) => (
                <MusicCard
                  key={song.trackId}
                  trackId={song.trackId}
                  music={song.trackName}
                  player={song.previewUrl}
                  musics={song}
                  index={index}
                />
              ))
            }
          </div>)
          : message}
      </Main>
    </section>
  );
}

export default Favorites;
