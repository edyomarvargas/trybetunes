import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createGlobalStyle } from 'styled-components';
import AppProvider from './context/AppProvider';

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
  `

  return (
    <main>
      <AppProvider>
        <GlobalStyle />
        
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
      </AppProvider>
    </main>
  );
}

export default App;
