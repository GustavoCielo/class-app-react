import { CardInfoContainer } from "./style"
import imgUser from "../../assets/icone usuario.png"
import {BiSend} from "react-icons/bi"
import { IconContext } from "react-icons"

const CardInfo = ({name, email, course, dateSubscribed}) => {
return(
  <CardInfoContainer>
    <div className="student">
      <div>
        <img src={imgUser} alt="" />
      </div>
     <div className="info">
       <h3>Caio Sampaio</h3>
       <p><strong>Email: </strong>caio@mail.com</p>
        <p><strong>Curso(s): </strong>Estatística</p>
        <p><strong>Inscrição: </strong>04/07/2021</p>
     </div>
    </div>
    <div className="buttonContainer">
    <button>Enviar mensagem
        <IconContext.Provider value={{size: "20px"}}>
              <BiSend/>
        </IconContext.Provider>
    </button>
    </div>
  </CardInfoContainer>
)
}

export default CardInfo