import {
  Container,
  ContainerWaveRight,
  ContainerWaveLeft,
  ContainerForm,
  ContainerImageLogin,
  ContainerCentral,
} from "./style";

import FormLogin from "../../components/FormLogin";

const PageLogin = () => {
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
