import { Container, ContainerWaveLeft, FigureStudent } from "./style";

import FormTeacher from "../../components/FormTeacher";
import FormStudent from "../../components/FormStudent";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

import { motion } from "framer-motion";

const RegisterStudent = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <ContainerWaveLeft />
        <FormStudent style={{ zIndex: 2 }} />
        <FigureStudent />
      </Container>
    </motion.div>
  );
};

export default RegisterStudent;
