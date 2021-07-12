import { IconClose, Row, RowControllers } from "./style";

import Button from "../Button";
import Modal from "../Modal";

import Book from "../../assets/book.svg";

const ModalBuyCourse = ({
  nomeCurso = "Não Informado",
  valorCurso = 0.0,
  dataInício = "Não Informado",
  saldo = -1,
}) => {
  return (
    <>
      <Modal backgroundImage={Book}>
        <Row>
          <h2>Comprar Curso</h2>
          <IconClose />
        </Row>
        <Row>
          <p>Nome: {nomeCurso}</p>
        </Row>
        <Row>
          <p>Valor: R$ {valorCurso.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Início da pŕoxima turma: {dataInício}</p>
        </Row>
        <RowControllers>
          <Button colorBG={"var(--color-theme)"}>Efetuar Pagamento</Button>
          {saldo > 0 ? (
            <p style={{ color: "#2fa38d" }}>Saldo: R$ {saldo.toFixed(2)}</p>
          ) : (
            <p style={{ color: "#F35D56" }}>Saldo: R$ {saldo.toFixed(2)}</p>
          )}
        </RowControllers>
      </Modal>
    </>
  );
};

export default ModalBuyCourse;
