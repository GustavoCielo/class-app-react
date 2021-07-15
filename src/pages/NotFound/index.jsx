import { Container, DivLottie, DivWaveLeft, DivWaveRight } from "./style";
import { useHistory } from "react-router-dom";
import LottieAnimation from "../../lottie";
import notFound from "../../animations/NotFoundAnimation/notFound.json";
import Wave from "react-wavify";

const NotFound = () => {
  const history = useHistory();

  setTimeout(() => history.push("/"), 4000);

  return (
    <Container>
      <DivWaveLeft>
        <Wave
          fill="var(--color-theme)"
          paused={false}
          options={{
            height: 20,
            amplitude: 25,
            speed: 0.2,
            points: 3,
          }}
        />
      </DivWaveLeft>
      <DivLottie>
        <LottieAnimation
          lotti={notFound}
          width="100%"
          height="100%"
          notLoop={true}
        />
        ;
      </DivLottie>
      <DivWaveRight>
        <Wave
          fill="var(--color-theme)"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.2,
            points: 3,
          }}
        />
      </DivWaveRight>
    </Container>
  );
};

export default NotFound;
