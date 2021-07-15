import HeaderAndAside from "../../components/HeaderAndAside";
import BaseContainer from "../../components/BaseContainer";
import {
  Info,
  SubContainer1,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  Title,
  Title2,
} from "./style";
import { useUsers } from "../../providers/Users";
import { useEffect } from "react";
import { useCourse } from "../../providers/Course";
import Button from "../../components/Button";
import { useClasses } from "../../providers/Class";

const Course = () => {
  const { user, handleUser } = useUsers();
  const { course } = useCourse();
  const { classes } = useClasses();
  useEffect(() => {
    handleUser();
  }, []);

  return (
    <HeaderAndAside page="course">
      <SubContainer1>
        <Title>{course.name}</Title>
        {user.isStudent ? (
          <Button
            colorBG={"var(--call-to-action)"}
            height={"35px"}
            width={"140px"}
          >
            Sala
          </Button>
        ) : (
          <>
            {" "}
            <Button
              colorBG={"var(--call-to-action)"}
              height={"35px"}
              width={"140px"}
            >
              Sala
            </Button>
            <Button height={"35px"} width={"140px"}>
              Editar{" "}
            </Button>{" "}
          </>
        )}
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>
          <BaseContainer maxWidth="600px;" maxHeight="350px">
            <Title2>Informações</Title2>
            <Info>{course.description}</Info>
          </BaseContainer>
          <SubContainer211>
            <BaseContainer width="280px" height="220px">
              <Title2>Responsável</Title2>
              {course.id === course}
            </BaseContainer>
            <BaseContainer width="280px" height="220px">
              {course.rating}
              <div>
                Duração : <span>{course.totalHours} horas</span>
              </div>
            </BaseContainer>
          </SubContainer211>
        </SubContainer21>
        <BaseContainer width="330px" height="440px;">
          <Title2>Inscritos</Title2>
          {/* <Info>{course.teacherId === user.id ? user.name }</Info> */}
        </BaseContainer>
      </SubContainer2>
    </HeaderAndAside>
  );
};

export default Course;
