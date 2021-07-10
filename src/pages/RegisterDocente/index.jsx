import { Container, ContainerWaveRight, ContainerWaveLeft } from "./style";

import FormTeacher from "../../components/FormTeacher";

const RegisterDocente = () => {
  return (
    <>
      <Container>
        <ContainerWaveLeft />
        <FormTeacher style={{ zIndex: 2 }} />
        <ContainerWaveRight />
      </Container>
    </>
  );
};

export default RegisterDocente;
