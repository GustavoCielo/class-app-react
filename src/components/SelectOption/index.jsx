import { OptionStyled } from "./style";

const SelectOption = ({ children, value }) => {
  return (
    <>
      <OptionStyled value={value}>{children}</OptionStyled>
    </>
  );
};

export default SelectOption;
