import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

function Search() {
  const [artist, setArtist] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  const handleClick = async (event) => {
    event.preventDefault();

    setLoading(true);

    // const request = await searchAlbums(artist);

    setLoading(true);
    // setSearchResult(request);

    // if (request.length === 0) {
    //   setSearchResult(undefined);
    // }
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
            <form onSubmit={handleClick}>
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
            </form>
          )
      }
      <div>
        {
          // Como searchResult pode ser undefined caso a pesquisa não retorne nenhum álbum,
          // preciso garantir que ele tem um valor truthy para ler searchResult.length
          // searchResult && searchResult.length > 0 && albumsResult
        }
        {
          !searchResult && <p>Nenhum álbum foi encontrado</p>
        }
        <section className="card-container">
          {
            // Como searchResult pode ser undefined caso a pesquisa não retorne nenhum álbum,
            // preciso garantir que ele tem um valor truthy para fazer o map nele
            searchResult
            && searchResult.map((album) => (
              <Link
                key={album.collectionId}
                to={`/album/${album.collectionId}`}
              >
                <div className="album-card">
                  <img src={album.artworkUrl100} alt="capa do album" />
                  <h3>{album.collectionName}</h3>
                  <p>{album.artistName}</p>
                </div>
              </Link>
            ))
          }
        </section>

      </div>
    </div>
  );
}

export default Search;
