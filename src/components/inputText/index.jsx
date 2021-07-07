import { ContainerInput } from "./style";

const InputText = ({ children }) => {
  return (
    <ContainerInput>
      <input type="text" placeholder={children} />
    </ContainerInput>
  );
};

export default InputText;
