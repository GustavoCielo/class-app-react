import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  useEffect(() => {
    api
      .get("/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCourses(response.data))
      .then(() => console.log(courses))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);
