import { TextAreaStyled } from "./style";

const InputTextArea = ({ reference, height }) => {
  return (
    <>
      <TextAreaStyled {...reference} height={height} />
    </>
  );
};

export default InputTextArea;
