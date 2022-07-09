import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser] = useState({
    email: 'user@email.com',
    password: '',
  });

  const contextValue = {
    user,
    setUser,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;