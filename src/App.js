import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main>
      <p>TrybeTunes</p>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/search" element={<Search />} />

          <Route path="/album/:id" element={<Album />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route path="/profile/edit" element={<ProfileEdit />} />

          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
