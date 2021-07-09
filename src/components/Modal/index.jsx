import {ModalContainer} from "./style"

const Modal = ({height = "287px", width = "474px", children, backgroundImage, ...rest}) => {
  return(
    <ModalContainer height={height} width={width} backgroundImage={backgroundImage}>
      <div className="modal">
      <div className="backgroundImage">
      {children}
      </div>
      </div>
    </ModalContainer>
  )
}

export default Modal