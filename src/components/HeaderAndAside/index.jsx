import Aside from "../Aside";
import Header from "../Header";
import FullContainer from "../FullContainer";
import { Container, AlignContent, DivChildren } from "./style";

const HeaderAndAside = ({ children, page }) => {
  return (
    <FullContainer>
      <Container>
        <Aside page={page} />
        <AlignContent>
          <Header />
          <DivChildren>{children}</DivChildren>
        </AlignContent>
      </Container>
    </FullContainer>
  );
};

export default HeaderAndAside;
