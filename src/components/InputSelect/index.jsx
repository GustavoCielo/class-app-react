import { SelectStyled } from "./style";

const InputSelect = ({ children, reference }) => {
  return (
    <>
      <SelectStyled {...reference}>{children}</SelectStyled>
    </>
  );
};

export default InputSelect;
