import { SelectStyled } from "./style";

const InputSelect = ({ children, colorBG, inputSize, reference }) => {
  return (
    <>
      <SelectStyled {...reference} colorBG={colorBG} inputSize={inputSize}>
        {children}
      </SelectStyled>
    </>
  );
};

export default InputSelect;
