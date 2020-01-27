import React from "react";

export const ContextLogin = React.createContext(null);

export const LoginProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    ligin: "",
    isLoggedIn: false
  });
  const providerUser = React.useMemo(() => ({ user, setUser }), [
    user,
    setUser
  ]);

  return (
    <ContextLogin.Provider value={providerUser}>
      {children}
    </ContextLogin.Provider>
  );
};
