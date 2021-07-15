import { Container, Title, Options } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";
import FullContainer from "../../components/FullContainer";
import RegisterMenu from "../../components/RegisterMenu";
import { motion } from "framer-motion";

const Register = () => {
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
      <FullContainer>
        <Container>
          <Title>ESCOLHA O TIPO DE CONTA</Title>
          <Options>
            <RegisterMenu
              handleClick={() => history.push("/register/teacher")}
            />
            <RegisterMenu
              student
              handleClick={() => history.push("/register/student")}
            />
          </Options>
        </Container>
      </FullContainer>
    </motion.div>
  );
};

export default Register;
