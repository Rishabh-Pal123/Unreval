import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalState {
  user: {
    name: string;
    email: string;
    isLoggedIn: boolean;
  };
  theme: 'light' | 'dark';
}

interface GlobalContextProps {
  state: GlobalState;
  setUser: (user: GlobalState['user']) => void;
  toggleTheme: () => void;
}

const defaultState: GlobalState = {
  user: {
    name: '',
    email: '',
    isLoggedIn: false,
  },
  theme: 'light',
};

// Create context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalState>(defaultState);

  const setUser = (user: GlobalState['user']) => {
    setState((prev) => ({ ...prev, user }));
  };

  const toggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, setUser, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
