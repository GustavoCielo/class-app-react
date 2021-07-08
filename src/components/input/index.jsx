import { ContainerInput } from "./style";

const Input = ({ placeholder, type }) => {
  return (
    <ContainerInput>
      <input type={type} placeholder={placeholder} />
    </ContainerInput>
  );
};

export default Input;
