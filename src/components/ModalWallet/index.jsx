
import bgImage from "../../assets/book (1) 1.png"
import Modal from "../Modal"
import Button from "../Button"

const ModalWallet = () => {
  return(
      <Modal backgroundImage={bgImage}>
        <header>
          <div>
          <h2>Saldo na conta</h2>
          </div>
          <div>
            icone
          </div>
        </header>
        <div className="money">
          <div>
            icone
          </div>
          <span>1.743,00</span>
        </div>
        <div className="buttonContainer">
          <Button>Adicionar saldo</Button>
          <Button>Transferir</Button>
        </div>
      </Modal>
  )

}

export default ModalWallet