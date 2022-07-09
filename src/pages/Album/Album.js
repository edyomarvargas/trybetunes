import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import getMusics from '../../services/musicsAPI';

function Album() {
  const [album, setAlbum] = useState(undefined);
  const [musics, setMusics] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {

    const fetchMusics = async () => {
      try {
        const id = pathname.split('/album/')[1];
        console.log(id);

        const request = await getMusics(id);

        const musics = request.filter((_element, index) => index !== 0);

        setAlbum(request);
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
      <p data-testid="artist-name">{album && album[0].artistName}</p>
      <h4 data-testid="album-name">{album && album[0].collectionName}</h4>

      {album && (
        <section>
          {
            musics.map((song) => (
              <MusicCard
                key={song.trackId}
                trackId={song.trackId}
                music={song.trackName}
                player={song.previewUrl}
                musics={song}
              />
            ))
          }
        </section>)}
    </div>
  );
}

export default Album;
