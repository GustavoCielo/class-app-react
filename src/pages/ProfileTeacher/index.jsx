import {
  UserIcon,
  StarIcon,
  BackIcon,
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
          </div>
          <div className="especializacao estilo-geral">
            <p className="title">Especialização</p>
            <p>EDO e EDP</p>
          </div>
          <div className="categoria estilo-geral">
            <p className="title">Categoria</p>
            <p>Exatas</p>
          </div>
          <div className="imagem">Imagem</div>
        </MainStyled>
      </HeaderAndAside>
    </>
  );
};

export default ProfileTeacher;
