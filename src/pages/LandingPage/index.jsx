import Button from "../../components/Button";
import { AnimationContainer, Container, HomeContainer } from "./style";
import FullContainer from "../../components/FullContainer";
import LottieAnimation from "../../lottie";
import distanceEducation from "../../animations/HomeAnimation/distanceEducation.json";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <FullContainer>
      <HomeContainer>
        <Container>
          <h1>CLASSAPP</h1>
          <p>
            Descubra de forma rápida e prática novas formas de aprender o que
            você mais deseja com o CLASSAPP, o seu mais novo aplicativo de
            ensino. Clique abaixo para se registrar e conhecer seus professores.
          </p>
          <Link to="/register">
            <Button
              color={"#FDFDFF"}
              colorBG={"#F35D56"}
              height={"40px"}
              width={"215px"}
              fontSize={"18px"}
            >
              REGISTRAR
            </Button>
          </Link>
          <Link to="/login">
            <Button
              color={"#F35D56"}
              height={"40px"}
              width={"215px"}
              fontSize={"18px"}
            >
              ENTRAR
            </Button>
          </Link>
        </Container>
        <AnimationContainer>
          <LottieAnimation lotti={distanceEducation} height={523} width={721} />
        </AnimationContainer>
      </HomeContainer>
    </FullContainer>
  );
};

export default LandingPage;
