import { DivStyled } from "./style";

const BaseContainer = ({ children, height, width, maxWidth, maxHeight }) => {
  return (
    <DivStyled
      height={height}
      width={width}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    >
      {children}
    </DivStyled>
  );
};

export default BaseContainer;
