import { InputStyled } from "./style";

const Input = ({
  placeholder,
  type,
  colorBG,
  inputSize,
  width,
  color,
  height,
  placeholderSize,
  reference,
}) => {
  return (
    <>
      <InputStyled
        type={type}
        colorBG={colorBG}
        inputSize={inputSize}
        placeholder={placeholder}
        width={width}
        height={height}
        color={color}
        placeholderSize={placeholderSize}
        {...reference}
      />
    </>
  );
};

export default Input;
