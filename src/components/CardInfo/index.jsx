import { CardInfoContainer } from "./style";
import imgUser from "../../assets/icone usuario.png";
import { BiSend } from "react-icons/bi";
import { IconContext } from "react-icons";

const CardInfo = ({
  name = "Caio Sampaio",
  email = "caio@mail.com",
  course = "Estatística",
  dateSubscribed = "04/07/2021",
}) => {
  return (
    <CardInfoContainer>
      <div className="student">
        <div>
          <img src={imgUser} alt="" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Curso(s): </strong>
            {course}
          </p>
          <p>
            <strong>Inscrição: </strong>
            {dateSubscribed}
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        <button>
          Enviar mensagem
          <IconContext.Provider value={{ size: "20px" }}>
            <BiSend />
          </IconContext.Provider>
        </button>
      </div>
    </CardInfoContainer>
  );
};

export default CardInfo;
