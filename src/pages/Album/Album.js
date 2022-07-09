import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import getMusics from '../../services/musicsAPI';
import { Section } from './Style';

function Album() {
  const [album, setAlbum] = useState(undefined);
  const [musics, setMusics] = useState([]);
  const { pathname } = useLocation();
  const MAX_SONGS = 7;

  useEffect(() => {

    const fetchMusics = async () => {
      try {
        const id = pathname.split('/album/')[1];
        console.log(id);

        const request = await getMusics(id);

        const musics = request.filter((_element, index) => index !== 0);

        setAlbum(request);

        if (musics && musics.length > MAX_SONGS) {
          const newArrayResultsToMap = musics.slice(0, MAX_SONGS);
          return setMusics(newArrayResultsToMap);
        }

        setMusics(musics);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMusics();
  }, []);

  return (
    <div>
      <Header />
      {/* As verificações abaixo de 'album' são para saber
          se essa variável possui um valor truthy, pos inicialmente
          ela está undefined no estado */}
      <Section>
        <div>
          <img src={album && album[0].artworkUrl100} alt="capa do album" />
          <h4>{album && album[0].collectionName}</h4>
          <p className="artist-name">{album && album[0].artistName}</p>
        </div>

        {album && (
          <div>
            {
              musics.map((song, index) => (
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
      </Section>
    </div>
  );
}

export default Album;
