import { createContext, useContext } from "react";
import api from "../../services/api";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {
  const isLoged = () => {
    const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;
    if (token) {
      return true;
    }
    return false;
  };

  const login = (data, history) => {
    api
      .post("/users", data)
      .then((response) => {
        localStorage.removeItem("@ClassApp:token");
        localStorage.setItem(
          "@ClassApp:token",
          JSON.stringify(response.data.accessToken)
        );
        isLoged();
        history.push("/");
      })
      .catch((error) => console.log("Usuário ou senha inválidos."));
  };

  const singUp = (data, history) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log("Sucesso ao criar a conta! Faça seu login :D");
        history.push("/login");
      })
      .catch((error) => console.log("Usuário já existe."));
  };

  return (
    <AuthenticateContext.Provider value={{ isLoged, login, singUp }}>
      {children}
    </AuthenticateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticateContext);
