import {ContainerFilter, ModalContainer} from "./style"
import Button from "../Button"
import {FaFilter} from "react-icons/fa"
import {IconContext} from "react-icons"
import {CoursesContainer, ContainerButton} from "./style"
import ModalCreateCourse from "../ModalCreateCourse"
import Modal from "../Modal"
import { useState } from "react"

const FilterCourses = () => {

  const [modal, setModal] = useState(false)

  const handleModal = ()=> {
    setModal(!modal)
  }

  return(
    <ContainerFilter>
      <CoursesContainer>
      <h1>Cursos</h1>
      <span>
      <IconContext.Provider value={{ size: "25px", color: "var(--hightlight-shadow)" }}>
              <FaFilter />
            </IconContext.Provider>
      </span>
      <h3>Filtrar</h3>
      </CoursesContainer>
      <ContainerButton>
        <Button fontSize="24px" height="40px" width="215px" colorBG="var(--call-to-action)" onclick={handleModal}>Criar curso</Button>
      </ContainerButton>
      {modal && <ModalContainer>
        <ModalCreateCourse handleModal={handleModal}></ModalCreateCourse>
      </ModalContainer>}
    </ContainerFilter>
  )
}

export default FilterCourses