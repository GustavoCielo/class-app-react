import {
  Container,
  Image,
  TextTop,
  TextBottom,
  SubtitleStyle,
  TitleStyle,
} from "./style";

const RegisterMenu = ({ student, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <TextTop>
        <TitleStyle>{student ? "Discente" : "Docente"}</TitleStyle>
      </TextTop>
      <TextBottom>
        <SubtitleStyle>
          {student ? "Obter conhecimento" : "Compartilhar conhecimento"}
        </SubtitleStyle>
      </TextBottom>
      <Image student={student} />
    </Container>
  );
};

export default RegisterMenu;
