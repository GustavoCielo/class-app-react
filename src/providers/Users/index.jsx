import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const handleUser = () => {
    const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

    const decoded = jwt_decode(token);
    const id = decoded.sub;

    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
