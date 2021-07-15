import { Container, Title, Options } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";
import FullContainer from "../../components/FullContainer";
import RegisterMenu from "../../components/RegisterMenu";

const Register = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <FullContainer>
      <Container>
        <Title>ESCOLHA O TIPO DE CONTA</Title>
        <Options>
          <RegisterMenu handleClick={() => history.push("/register/teacher")} />
          <RegisterMenu
            student
            handleClick={() => history.push("/register/student")}
          />
        </Options>
      </Container>
    </FullContainer>
  );
};

export default Register;
