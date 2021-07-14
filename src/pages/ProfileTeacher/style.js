import styled from "styled-components";

import { FaUserCircle } from "react-icons/fa";
import { AiFillStar, AiTwotoneInfoCircle } from "react-icons/ai";
import { FiArrowLeftCircle } from "react-icons/fi";

import ImageBackground from "../../assets/image-profile.svg";

export const UserIcon = styled(FaUserCircle)`
  font-size: 5rem;
  color: var(--color-theme);
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 2rem;
  color: yellow;
`;

export const BackIcon = styled(FiArrowLeftCircle)`
  font-size: 2.5rem;
`;

export const BulletIcon = styled(AiTwotoneInfoCircle)`
  color: red;
  background-color: red;
  border-radius: 50%;
`;

export const MainStyled = styled.div`
  width: 95%;
  height: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(20vh, 1fr));
  grid-gap: 10px;
  grid-template-areas:
    "cabecalho cabecalho cabecalho"
    "descricao descricao cursos"
    "especializacao categoria cursos"
    "imagem imagem cursos";

  .estilo-geral {
    background-color: #f8f8fd;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.18);
    border-radius: 10px;
    padding: 10px;

    .title {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--color-theme);

      margin-bottom: 10px;
    }
  }

  .cabecalho {
    grid-area: cabecalho;
    background-color: #fdfdff;

    display: flex;
    justify-content: space-between;
  }

  .descricao {
    grid-area: descricao;
  }

  .cursos {
    grid-area: cursos;

    ul {
      padding: 10px;

      li {
        list-style: none;
        padding: 10px;

        display: flex;

        span {
          display: flex;
          align-items: center;

          margin-right: 5px;
        }
      }
    }
  }

  .especializacao {
    grid-area: especializacao;
  }

  .categoria {
    grid-area: categoria;
  }

  .imagem {
    grid-area: imagem;
    background-image: url(${ImageBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const RowInformationsUser = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CellRating = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const RowController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionStyled = styled.div``;
