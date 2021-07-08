import {
  Container,
  SubContainer2,
  SubContainer21,
  SubContainer22,
  SubContainer1,
  SubContainer3,
  SubContainer4,
  Title,
  IconContainer,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import { IoIosCloseCircle } from "react-icons/io";
const ModalCreateCourse = () => {
  return (
    <Container>
      <SubContainer1>
        <Title>Crie seu curso</Title>
        <IconContainer>
          <IoIosCloseCircle className="figure" />
        </IconContainer>
      </SubContainer1>
      <Input placeholder="Nome" />
      <SubContainer2>
        <SubContainer21>
          <Input placeholder="Valor" />
        </SubContainer21>
        <SubContainer22>
          <Input placeholder="Duração" />
        </SubContainer22>
      </SubContainer2>
      <SubContainer3>
        <label>Categoria</label>
        <Input />
      </SubContainer3>
      <SubContainer4>
        <label>Descrição</label>
        <Input />
      </SubContainer4>
      <Button colorBG={color: red}></Button>
    </Container>
  );
};

export default ModalCreateCourse;
