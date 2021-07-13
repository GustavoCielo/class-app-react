import Button from "../../components/Button";
import { AnimationContainer, HomeContainer } from "./style";
import FullContainer from "../../components/FullContainer";
import LottieAnimation from "../../lottie";
import distanceEducation from "../../animations/HomeAnimation/distanceEducation.json";

const LandingPage = () => {
  return (
    <FullContainer>
      <HomeContainer>
        <div>
          <h1>CLASSAPP</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            mollitia? Neque amet a doloribus accusantium enim molestiae ipsa rem
            facere hic, atque dolores sed tenetur similique. Magnam non facilis
            dolores.
          </p>
          <Button
            color={"#FDFDFF"}
            colorBG={"#F35D56"}
            height={"40px"}
            width={"215px"}
            fontSize={"18px"}
            onClick={() => console.log("i work")}
          >
            REGISTRAR
          </Button>
          <Button
            color={"#F35D56"}
            height={"40px"}
            width={"215px"}
            fontSize={"18px"}
            onClick={() => console.log("i work")}
          >
            ENTRAR
          </Button>
        </div>
        <AnimationContainer>
          <LottieAnimation lotti={distanceEducation} height={523} width={721} />
        </AnimationContainer>
      </HomeContainer>
    </FullContainer>
  );
};

export default LandingPage;
