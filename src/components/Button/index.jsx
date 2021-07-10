import { ButtonStyled } from "./style";

const Button = ({ children, colorBG, color, height, width, fontSize, onclick}) => {
  
  return (
    <>
      <ButtonStyled onClick={onclick} colorBG={colorBG} color={color} height={height} width={width} fontSize={fontSize}>
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
