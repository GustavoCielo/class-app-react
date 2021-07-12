import { InputStyled } from "./style";

const Input = ({ placeholder, type, reference, width, height, placeholderSize, color }) => {
  return (
    <>
      <InputStyled type={type} {...reference} placeholder={placeholder} width={width} height={height} placeholderSize={placeholderSize} color={color}/>
    </>
  );
};

export default Input;
