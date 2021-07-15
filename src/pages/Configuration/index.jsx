import userEvent from "@testing-library/user-event";
import { FaImages } from "react-icons/fa";
import Button from "../../components/Button";
import HeaderAndAside from "../../components/HeaderAndAside";
import jwt_decode from "jwt-decode";
import {
  ContainerConfiguration,
  ChangeAvatar,
  Title,
  ButtonContainer,
} from "./style";
import imgCourses from "../../assets/imgCourses.png";
import imgUser from "../../assets/icone usuario.png";
import EditInformation from "../../components/EditInformations";
import ModalEditCourse from "../../components/ModalEditCourse";
import { useState, useEffect } from "react";
import { useUsers } from "../../providers/Users";
import { motion } from "framer-motion";

const Configuration = () => {
  const { user } = useUsers();

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderAndAside page="settings">
        <Title>Configurações</Title>
        <ContainerConfiguration>
          <img className="imgBack" src={imgCourses} alt="imagem background" />
          <EditInformation user={user} />

          <ChangeAvatar>
            <h2>Mudar avatar</h2>
            <img
              src={user.profilePicture ? user.profilePicture : imgUser}
              alt="Profile"
            />
            <ButtonContainer>
              <Button width="90%" colorBG="var(--hightlight-shadow)">
                Selecionar uma foto
              </Button>
              <Button width="90%" colorBG="var(--font-color)">
                Atualizar avatar
              </Button>
            </ButtonContainer>
          </ChangeAvatar>
        </ContainerConfiguration>
      </HeaderAndAside>
    </motion.div>
  );
};

export default Configuration;
