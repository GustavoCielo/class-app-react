import { createContext, useContext } from "react";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {
  const isLoged = () => {
    const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;
    if (token) {
      return true;
    }
    return false;
  };

  return (
    <AuthenticateContext.Provider value={{ isLoged}}>
      {children}
    </AuthenticateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticateContext);
