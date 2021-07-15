import { Container, ContainerWaveRight, ContainerWaveLeft } from "./style";

import FormTeacher from "../../components/FormTeacher";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const RegisterTeacher = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

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

export default RegisterTeacher;
