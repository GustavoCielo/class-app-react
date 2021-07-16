import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import FullContainer from "../../components/FullContainer";
import HeaderAndAside from "../../components/HeaderAndAside";
import { useAuth } from "../../providers/Authentication";
import Calendar from "../../components/Calendar";
import BaseContainer from "../../components/BaseContainer";
import { useCourses } from "../../providers/Courses";
import { useUsers } from "../../providers/Users";
import { Container, StyledContainer } from "./style";
import adicionar from "../../assets/adicionar.svg";
import { useEffect, useState } from "react";
import ScrollBar from "../../components/ScrollBar";
import ModalCreateCourse from "../../components/ModalCreateCourse";

const Dashboard = () => {
  const { isLoged } = useAuth();
  const { courses } = useCourses();
  const { user, handleUser } = useUsers();
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    handleUser();
    if (loaded === false) {
      setTimeout(() => setLoaded(true), 1000);
    }
  }, []);

  if (isLoged() === false) {
    return <Redirect to="/login" />;
  }

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {user.isStudent ? (
        <FullContainer>
          <HeaderAndAside>
            <Container>
              <Calendar />
              <StyledContainer width={"195px"} maxHeight={"420px"}>
                <ScrollBar>
                  <h2>Cursos inscritos</h2>
                  {loaded &&
                    courses?.map((item, index) => {
                      return (
                        <div key={index}>
                          <span>{item.name}</span>
                          <p>{item.category}</p>
                        </div>
                      );
                    })}
                </ScrollBar>
              </StyledContainer>
            </Container>
          </HeaderAndAside>
        </FullContainer>
      ) : (
        <FullContainer>
          <HeaderAndAside>
            <Container>
              <Calendar />
              <BaseContainer width={"195px"}>
                <h2>Meus Cursos</h2>
                {loaded &&
                  courses
                    ?.filter((item) => {
                      return item.teacherId === user.id;
                    })
                    ?.map((item, index) => {
                      return (
                        <div key={index}>
                          <span>{item.name}</span>
                          <p>{item.category}</p>
                        </div>
                      );
                    })}
                <div
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => setShow(true)}
                >
                  <img src={adicionar} /> Criar curso
                </div>
              </BaseContainer>
            </Container>
            {show && <ModalCreateCourse />}
          </HeaderAndAside>
        </FullContainer>
      )}
    </motion.div>
  );
};

export default Dashboard;
