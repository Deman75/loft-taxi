import React from "react";

export const ContextLogin = React.createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = React.useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = React.useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <ContextLogin.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </ContextLogin.Provider>
  );
};
