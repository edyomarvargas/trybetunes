import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [description, setDescription] = useState('Edite o perfil para adicionar uma descrição...');
  const [cameFromProfileEdit, setCameFromProfileEdit] = useState(false)
  const [user, setUser] = useState({
    name: 'Usuário',
    email: '',
    password: '',
    image: '',
  });

  const contextValue = {
    user,
    setUser,
    description,
    setDescription,
    cameFromProfileEdit,
    setCameFromProfileEdit,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
