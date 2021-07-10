import { Container, ContainerWaveLeft, FigureStudent } from "./style";

import FormTeacher from "../../components/FormTeacher";
import FormStudent from "../../components/FormStudent";

const RegisterStudent = () => {
  return (
    <>
      <Container>
        <ContainerWaveLeft />
        <FormStudent style={{ zIndex: 2 }} />
        <FigureStudent />
      </Container>
    </>
  );
};

export default RegisterStudent;
