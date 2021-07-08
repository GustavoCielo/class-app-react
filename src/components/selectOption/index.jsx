import { OptionStyled } from "./style";

const SelectOption = ({ children }) => {
  return (
    <>
      <OptionStyled value={children}>{children}</OptionStyled>
    </>
  );
};

export default SelectOption;
