import {
  AsideContainer,
  AsideMainContainerImage,
  AsideBottomContainerImage,
  AsideTopContainerImage,
  IconSelected,
  BallSelected,
  Li,
  Text,
} from "./style";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { BiBookReader } from "react-icons/bi";
import { useHistory } from "react-router";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";

const Aside = ({ page }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AsideContainer>
      <AsideTopContainerImage
        className="figure-top"
        onClick={() => {
          sendTo();
        }}
      />
      <AsideMainContainerImage>
        <Li selected={page === "home"}>
          <IconSelected>
            <AiOutlineHome
              className="figure-aside"
              onClick={() => {
                sendTo();
              }}
            />
            <BallSelected selected={page === "home"} />
          </IconSelected>
          <Text>Home</Text>
        </Li>
        <Li selected={page === "message"}>
          <IconSelected>
            <BiMessageDetail
              className="figure-aside"
              onClick={() => {
                sendTo();
              }}
            />
            <BallSelected selected={page === "message"} />
          </IconSelected>
          <Text>Mensagens</Text>
        </Li>
        <Li selected={page === "courses"}>
          <IconSelected>
            <FaGraduationCap
              className="figure-aside"
              onClick={() => {
                sendTo();
              }}
            />
            <BallSelected selected={page === "courses"} />
          </IconSelected>
          <Text>Cursos</Text>
        </Li>
        <Li selected={page === "students"}>
          <IconSelected>
            <BiBookReader
              className="figure-aside"
              onClick={() => {
                sendTo();
              }}
            />
            <BallSelected selected={page === "students"} />
          </IconSelected>
          <Text>Alunos</Text>
        </Li>
        <Li selected={page === "settings"}>
          <IconSelected>
            <IoIosSettings
              className="figure-aside"
              onClick={() => {
                sendTo();
              }}
            />
            <BallSelected selected={page === "settings"} />
          </IconSelected>
          <Text>Configurações</Text>
        </Li>
      </AsideMainContainerImage>
      <AsideBottomContainerImage>
        <RiLogoutBoxRLine
          className="figure-bottom"
          onClick={() => {
            sendTo();
          }}
        />
      </AsideBottomContainerImage>
    </AsideContainer>
  );
};

export default Aside;
