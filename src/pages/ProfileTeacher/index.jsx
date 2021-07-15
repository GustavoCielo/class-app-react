import {
  UserIcon,
  StarIcon,
  BackIcon,
  BulletIcon,
  MainStyled,
  RowInformationsUser,
  CellRating,
  RowController,
} from "./style";

import HeaderAndAside from "../../components/HeaderAndAside";

import { useUsers } from "../../providers/Users";
import { useCourses } from "../../providers/Courses";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const ProfileTeacher = () => {
  const { user } = useUsers();
  const { courses } = useCourses();

  const history = useHistory();

  const { isLoged } = useAuth();

  if (!isLoged) {
    return <Redirect to="/register" />;
  }

  const coursesFiltered = courses.filter((course) => {
    return course.teacherId === user.id;
  });

  return (
    <>
      <HeaderAndAside>
        <MainStyled>
          <div className="cabecalho">
            <RowInformationsUser>
              <UserIcon />
              <h2>Prof. {user.name}</h2>
              <CellRating>
                <StarIcon />
                <p>{user.rating ? user.rating : "Não classif."}</p>
              </CellRating>
            </RowInformationsUser>
            <RowController>
              <BackIcon />
            </RowController>
          </div>
          <div className="descricao estilo-geral">
            <p className="title">Descrição</p>
            <p>
              {user.description ? user.description : "Sem descrição disponível"}
            </p>
          </div>
          <div className="cursos estilo-geral">
            <p className="title">Cursos</p>
            <ul>
              {coursesFiltered.lenght >= 1
                ? coursesFiltered.map((courseItem) => {
                    return (
                      <li key={courseItem.id}>
                        <span>
                          <BulletIcon />
                        </span>
                        <p>{courseItem.name}</p>
                      </li>
                    );
                  })
                : "Não possui cursos vinculados"}
            </ul>
          </div>
          <div className="especializacao estilo-geral">
            <p className="title">Especialização</p>
            <p>
              {user.educationalStage ? user.educationalStage : "Não informado"}
            </p>
          </div>
          <div className="categoria estilo-geral">
            <p className="title">Categoria</p>
            <p>{user.subjects ? user.subjects : "Não informado"}</p>
          </div>
          <div className="imagem"></div>
        </MainStyled>
      </HeaderAndAside>
    </>
  );
};

export default ProfileTeacher;
