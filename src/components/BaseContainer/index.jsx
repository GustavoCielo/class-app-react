import { DivStyled } from "./style";

const BaseContainer = ({ children, height, width }) => {
  return (
    <DivStyled height={height} width={width}>
      {children}
    </DivStyled>
  );
};

export default BaseContainer;
