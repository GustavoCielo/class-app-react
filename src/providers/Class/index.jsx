import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ClassesContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  //   const handleConsult = () => {};

  useEffect(() => {
    api
      .get("/class", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setClasses(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ClassesContext.Provider value={{ classes, setClasses }}>
      {children}
    </ClassesContext.Provider>
  );
};

export const useClasses = () => useContext(ClassesContext);
