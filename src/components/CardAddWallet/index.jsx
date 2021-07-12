import Modal from "../Modal"
import bgImage from "../../assets/cifrao.png"
import { IconContext } from "react-icons"
import { CardWalletContainer } from "./style"
import Button from "../Button"
import {IoMdCloseCircle} from "react-icons/io"
import Input from "../Input"

const CardAddWallet = ({title, textButton}) => {
return(
  <Modal backgroundImage={bgImage}>
  <CardWalletContainer>
  <header>
   
    <h2>{title}</h2>
    <span>
    <IconContext.Provider value={{size: "30px"}}>
        <IoMdCloseCircle/>
    </IconContext.Provider>
    </span>
    
  </header>
  <div className="money">
    <div className="input-container">
    <Input placeholder="Digite o valor" width="100%" height="100%" placeholderSize="18px"/>
    </div>
  </div>
  <div className="buttonContainer">
    <Button colorBG="#003F66" color="#ffffff" height="40px" width="188px" fontSize="18px">{textButton}</Button>
    
  </div>
  </CardWalletContainer>
</Modal>
)
}

export default CardAddWallet