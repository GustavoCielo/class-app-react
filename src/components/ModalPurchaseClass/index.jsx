import {
  Container,
  ContainerRow,
  IconClose,
  IconMoney,
  IconClock,
  IconStar,
  RowCell,
} from "./style";

const ModalPurchaseClass = () => {
  return (
    <>
      <Container>
        <ContainerRow>
          <h3>Titulo</h3>
          <IconClose />
        </ContainerRow>
        <ContainerRow className="RowIcons">
          <RowCell>
            <IconMoney />
            <p>70,00</p>
          </RowCell>
          <RowCell>
            <IconClock />
            <p>20 horas</p>
          </RowCell>
          <RowCell>
            <IconStar />
            <p>5.0</p>
          </RowCell>
        </ContainerRow>
      </Container>
    </>
  );
};

export default ModalPurchaseClass;
