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

const ProfileTeacher = () => {
  return (
    <>
      <HeaderAndAside>
        <MainStyled>
          <div className="cabecalho">
            <RowInformationsUser>
              <UserIcon />
              <h2>Prof. Jubileu</h2>
              <CellRating>
                <StarIcon />
                <p>5.0</p>
              </CellRating>
            </RowInformationsUser>
            <RowController>
              <BackIcon />
            </RowController>
          </div>
          <div className="descricao estilo-geral">
            <p className="title">Descrição</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur commodi provident fuga ut nostrum harum officia sunt
              consequuntur asperiores iste facilis, pariatur architecto alias
              inventore quos aperiam exercitationem labore.
            </p>
          </div>
          <div className="cursos estilo-geral">
            <p className="title">Cursos</p>
            <ul>
              <li>
                <span>
                  <BulletIcon />
                </span>
                <p>Algebra Linear</p>
              </li>
              <li>
                <span>
                  <BulletIcon />
                </span>
                Estatística
              </li>
              <li>
                <span>
                  <BulletIcon />
                </span>
                Calculo I
              </li>
            </ul>
          </div>
          <div className="especializacao estilo-geral">
            <p className="title">Especialização</p>
            <p>EDO e EDP</p>
          </div>
          <div className="categoria estilo-geral">
            <p className="title">Categoria</p>
            <p>Exatas</p>
          </div>
          <div className="imagem"></div>
        </MainStyled>
      </HeaderAndAside>
    </>
  );
};

export default ProfileTeacher;
