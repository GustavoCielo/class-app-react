import {
  Container,
  SubContainer1,
  Title,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  ButtonChat,
} from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSend } from "react-icons/md";

import InputChat from "../InputChat";

const ChatContainer = ({ children, name }) => {
  return (
    <Container className="shadow">
      <SubContainer1>
        <Title>{name}</Title>
        <IoIosCloseCircle className="figure" />
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>
          <SubContainer211>
            <InputChat
              placeholder="Digite sua mensagem aqui"
              onChange={() => {}}
            >
              {children}
            </InputChat>
          </SubContainer211>

          <ButtonChat onClick={() => {}}>
            <MdSend class="figure2" />
          </ButtonChat>
        </SubContainer21>
      </SubContainer2>
    </Container>
  );
};

export default ChatContainer;
