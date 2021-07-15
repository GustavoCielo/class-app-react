import { Container } from "./style";

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
        <div className="wave" />
        <div className="form">
          <FormLogin />
        </div>
        <div className="animation">
          <LottieAnimation
            lotti={SecureLogin}
            width={"300px"}
            height={"300px"}
          />
        </div>
        <div className="wave2" />
      </Container>
    </>
  );
};

export default PageLogin;
