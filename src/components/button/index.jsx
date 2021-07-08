import { ButtonStyled } from "./style";

const Button = ({ children, colorBG, color }) => {
  return (
    <>
      <ButtonStyled colorBG={colorBG} color={color}>
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
