import { InputStyled } from "./style";

const InputChat = ({ placeholder, type, reference }) => {
  return (
    <>
      <InputStyled type={type} {...reference} placeholder={placeholder} />
    </>
  );
};

export default InputChat;
