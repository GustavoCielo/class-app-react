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

import { useHistory, Redirect, Link } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

import { motion } from "framer-motion";

const ProfileTeacher = () => {
  const { user } = useUsers();
  const { courses } = useCourses();

  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === false) {
    return <Redirect to="/login" />;
  }

  const coursesOwner = courses.filter((item) => {
    return item.teacherId === user.id;
  });

  console.log(coursesOwner);

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
              <Link to="/dashboard">
                <BackIcon />
              </Link>
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
              {coursesOwner.length >= 1
                ? coursesOwner.map((course) => {
                    return (
                      <li key={course.id}>
                        <span>
                          {course.category === "Biológicas" ? (
                            <BulletIcon color={"green"} />
                          ) : course.category === "Exatas" ? (
                            <BulletIcon color={"red"} />
                          ) : course.category === "Humanas" ? (
                            <BulletIcon color={"yellow"} />
                          ) : course.category === "Linguagens" ? (
                            <BulletIcon color={"blue"} />
                          ) : (
                            <BulletIcon color={"pink"} />
                          )}
                        </span>
                        <p>{course.name}</p>
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
    </motion.div>
  );
};

export default ProfileTeacher;
