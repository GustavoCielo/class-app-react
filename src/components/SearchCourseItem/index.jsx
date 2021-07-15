import InputTextArea from "../inputTextArea";
import { Container, InputContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";

const SearchCourseItem = ({ children }) => {
  return (
    <Container>
      <InputContainer>
        <span className="search">
          <IconContext.Provider value={{ size: "28px" }}>
            <BiSearch />
          </IconContext.Provider>
        </span>
        <input type="text" placeholder="procurar cursos" className="input" />
      </InputContainer>
    </Container>
  );
};

export default SearchCourseItem;
