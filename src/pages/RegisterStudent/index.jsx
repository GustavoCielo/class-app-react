import { Container, ContainerWaveLeft, FigureStudent } from "./style";

import FormTeacher from "../../components/FormTeacher";
import FormStudent from "../../components/FormStudent";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const RegisterStudent = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

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
