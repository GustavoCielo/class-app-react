import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  // const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb29AZ21haWwuY29tIiwiaWF0IjoxNjI2MjkzNjU2LCJleHAiOjE2MjYyOTcyNTYsInN1YiI6IjEzIn0.f9hNNzyuTqEQWwjb4-18kbBIhTgsTy6ivOVG3S7w_Bo";
  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  useEffect(() => {
    api
      .get("/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCourses(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CoursesContext.Provider value={{ courses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);
