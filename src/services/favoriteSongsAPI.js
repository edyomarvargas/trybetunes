// O código abaixo foi retirado do projeto Trybetunes da escola de programação Trybe.
// Toda a base das funções abaixo foram feitas pelas pessoas instrutoras da Trybe,
// apenas modifiquei alguns pontos para retirar uma assincronicidade simulada no projeto.

const FAVORITE_SONGS_KEY = 'favorite_songs';

if (!JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY))) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}

const readFavoriteSongs = () => JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));
const saveFavoriteSongs = (favoriteSongs) => localStorage
.setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

export const addSong = (song) => {
  if (song) {
    const favoriteSongs = readFavoriteSongs();
    saveFavoriteSongs([...favoriteSongs, song]);
  }
};

export const removeSong = (song) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s) => s.trackId !== song.trackId));
};
