import { ContainerInput } from "./style";

const InputSelect = ({ children }) => {
  return (
    <ContainerInput>
      <select>{children}</select>
    </ContainerInput>
  );
};

export default InputSelect;
