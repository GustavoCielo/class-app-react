import {ModalWalletContainer} from "./style"
import Button from "../Button"

const ModalWallet = () => {
  return(
      <ModalWalletContainer>
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
      </ModalWalletContainer>
  )

}

export default ModalWallet