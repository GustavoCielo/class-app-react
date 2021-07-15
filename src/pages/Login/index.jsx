import {
  Container,
  Wave1,
  Wave2,
  ContainerCentral,
  ContainerAnimation,
  ContainerForm,
} from "./style";

import FormLogin from "../../components/FormLogin";
import SecureLogin from "../../animations/SecureLogin/secure-login.json";
import LottieAnimation from "../../lottie";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const PageLogin = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container>
        <Wave1 />
        <ContainerCentral>
          <ContainerForm>
            <FormLogin />
          </ContainerForm>
          <ContainerAnimation>
            <LottieAnimation
              lotti={SecureLogin}
              width={"100%"}
              height={"100%"}
            />
          </ContainerAnimation>
        </ContainerCentral>
        <Wave2 />
      </Container>
    </>
  );
};

export default PageLogin;
