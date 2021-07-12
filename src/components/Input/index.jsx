import { InputStyled } from "./style";

const Input = ({ placeholder, type, colorBG, inputSize, reference }) => {
  return (
    <>
      <InputStyled
        type={type}
        {...reference}
        colorBG={colorBG}
        inputSize={inputSize}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
