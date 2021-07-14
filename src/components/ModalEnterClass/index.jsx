import { Container, ContainerRow, IconClose } from "./style";

const ModalEnterClass = ({
  dia = "Não informado",
  hora = "Não informado",
  link = "Não informado",
}) => {
  return (
    <>
      <Container>
        <ContainerRow>
          <h3>Próximo Encontro</h3>
          <IconClose />
        </ContainerRow>
        <ContainerRow>
          <p>
            <span>Dia:</span> {dia}
          </p>
        </ContainerRow>
        <ContainerRow>
          <p>
            <span>Hora:</span> {hora}
          </p>
        </ContainerRow>
        <ContainerRow>
          <a href={link} target="blank">
            <h3>Link para a reunião</h3>
          </a>
        </ContainerRow>
      </Container>
    </>
  );
};

export default ModalEnterClass;
