import { InputStyled } from "./style";

const Input = ({ placeholder, type, reference }) => {
  return (
    <>
      <InputStyled type={type} {...reference} placeholder={placeholder} />
    </>
  );
};

export default Input;
