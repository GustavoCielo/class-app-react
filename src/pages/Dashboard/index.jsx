import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import FullContainer from "../../components/FullContainer";
import HeaderAndAside from "../../components/HeaderAndAside";
import { useAuth } from "../../providers/Authentication";
import Calendar from "../../components/Calendar";
import BaseContainer from "../../components/BaseContainer";
import { useCourses } from "../../providers/Courses";
import { useUsers } from "../../providers/Users";
import CardClass from "../../components/CardClass";
import { Container, StyledContainer } from "./style";
import adicionar from "../../assets/adicionar.svg";
import { useEffect } from "react";
import ScrollBar from "../../components/ScrollBar";

const Dashboard = () => {
  const { isLoged } = useAuth();
  const { courses } = useCourses();
  const { user, handleUser } = useUsers();

  useEffect(() => {
    handleUser();
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
                  {courses?.map((item, index) => {
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
            <Container>
              <CardClass />
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
                {courses
                  ?.filter((item) => {
                    return item.teacherId === user.id;
                  })
                  .map((item, index) => {
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
                >
                  <img src={adicionar} /> Criar curso
                </div>
              </BaseContainer>
            </Container>
            <Container>
              <CardClass />
              <CardClass />
              <CardClass />
            </Container>
          </HeaderAndAside>
        </FullContainer>
      )}
    </motion.div>
  );
};

export default Dashboard;
