import { Container } from "./style";

import FormLogin from "../../components/FormLogin";
import SecureLogin from "../../animations/SecureLogin/secure-login.json";
import LottieAnimation from "../../lottie";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";
import { motion } from "framer-motion";

const PageLogin = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

export default PageLogin;
