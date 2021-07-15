import {
  Container,
  ContainerWaveRight,
  ContainerWaveLeft,
  ContainerForm,
  ContainerImageLogin,
  ContainerCentral,
} from "./style";

import FormLogin from "../../components/FormLogin";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const PageLogin = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (!isLoged) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ContainerWaveLeft />
        <ContainerCentral>
          <ContainerForm>
            <FormLogin />
          </ContainerForm>
          <ContainerImageLogin />
        </ContainerCentral>
        <ContainerWaveRight />
      </Container>
    </>
  );
};

export default PageLogin;
