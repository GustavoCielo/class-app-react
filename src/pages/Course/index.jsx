import HeaderAndAside from "../../components/HeaderAndAside";
import BaseContainer from "../../components/BaseContainer";
import {
  SubContainer1,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  Title,
} from "./style";
import { motion } from "framer-motion";
const Course = () => {
  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderAndAside page="course">
        <SubContainer1>
          <Title>{}</Title>
        </SubContainer1>
        <SubContainer2>
          <SubContainer21>
            <BaseContainer width="600px;" height="350px">
              Informações
            </BaseContainer>
            <SubContainer211>
              <BaseContainer width="280px" height="220px">
                Responsável
              </BaseContainer>
              <BaseContainer width="280px" height="220px">
                Duração
              </BaseContainer>
            </SubContainer211>
          </SubContainer21>
          <BaseContainer width="330px" height="440px;">
            Inscritos
          </BaseContainer>
        </SubContainer2>
      </HeaderAndAside>
    </motion.div>
  );
};

export default Course;
