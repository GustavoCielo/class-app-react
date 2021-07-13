import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { Container, HeaderContainer } from "./style";
const Courses = () => {
  return (
    <Container>
      <FullContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Aside />
      </FullContainer>
    </Container>
  );
};

export default Courses;
