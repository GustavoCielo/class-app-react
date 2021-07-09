import { InputStyled } from "./style";

const InputDate = ({ reference }) => {
  return (
    <>
      <InputStyled type="date" name="data" {...reference} />
    </>
  );
};

export default InputDate;
