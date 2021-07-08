import { InputStyled } from "./style";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <InputStyled type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
