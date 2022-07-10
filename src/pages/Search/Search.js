import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import searchAlbums from '../../services/searchAlbumsAPI';
import { Div, Section, Form, P, P2 } from './Style';

function Search() {
  const [artist, setArtist] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const albumsResult = (
    <P>
      {`Resultado de álbuns de: ${artist}`}
    </P>
  );

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const request = await searchAlbums(artist);

      setLoading(false);
      setSearchResult(request);

      if (request.length === 0) {
        setSearchResult(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = ({ target }) => {
    if (target.value.length >= 2) {
      setArtist(target.value);
      return setDisabled(false);
    }

    setArtist(target.value);
    setDisabled(true);
  }

  return (
    <div>
      <Header />

      {
        loading
          ? <Loading />
          : (
            <Form onSubmit={handleClick}>
              <label htmlFor="search">
                <input
                  type="text"
                  placeholder="Nome do artista..."
                  onChange={handleChange}
                />
              </label>

              <button
                type="submit"
                disabled={disabled}
              >
                Pesquisar
              </button>
            </Form>
          )
      }
      <div>
        {
          // Como searchResult pode ser undefined caso a pesquisa não retorne nenhum álbum,
          // preciso garantir que ele tem um valor truthy para ler searchResult.length
          searchResult && searchResult.length > 0 && albumsResult
        }
        {
          !searchResult && <P2>Nenhum álbum foi encontrado</P2>
        }
        <Section>
          {
            // Como searchResult pode ser undefined caso a pesquisa não retorne nenhum álbum,
            // preciso garantir que ele tem um valor truthy para fazer o map nele
            searchResult
            && searchResult.map((album) => (
              <Div
                key={album.collectionId}
                onClick={() => navigate(`/album/${album.collectionId}`)}
              >
                <img src={album.artworkUrl100} alt="capa do album" />
                <h3>{album.collectionName}</h3>
                <p>{album.artistName}</p>
              </Div>
            ))
          }
        </Section>

      </div>
    </div>
  );
}

export default Search;
