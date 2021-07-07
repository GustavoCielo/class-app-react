import { ContainerInput } from "./style";

const Input = ({ placeholder, tipo }) => {
  return (
    <ContainerInput>
      <input type={tipo} placeholder={placeholder} />
    </ContainerInput>
  );
};

export default Input;
