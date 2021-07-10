import {
  Container,
  SubContainer1,
  Title,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  ButtonChat,
} from "./styles";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSend } from "react-icons/md";

import { useState } from "react";
import InputChat from "../InputChat";

const ChatContainer = ({ children, name }) => {
  // const [chat, setChat] = useState("");
  // const [message, setMessage] = useState([]);

  // const handleChat = () => {
  //   setMessage([...message, chat]);
  // };

  return (
    <Container>
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
