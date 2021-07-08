import {
  Container,
  TextContainer,
  FormRow,
  RowCell,
  RowCellMerge,
  ContainerSingle,
  ContainerInputSingle,
  ContainerTextArea,
  ContainerSingleTextArea,
  TextStyled,
  RowCellInputDate,
  RowButton,
} from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";

import Input from "../Input";
import InputDate from "../InputDate";
import InputSelect from "../InputSelect";
import SelectOption from "../SelectOption";
import InputTextArea from "../InputTextArea";
import Button from "../Button";

const FormTeacher = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
    surname: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    confirmation: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
    birth_day: yup.string().required("Campo obrigatório"),
    specialization: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
    category: yup.string().required("Campo obrigatório"),
    description: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    console.log(data);
    console.log("teste");
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormRow>
            <TextContainer>
              <h5>Cadastre-se como docente</h5>
              <AiFillCloseCircle />
            </TextContainer>
          </FormRow>

          <FormRow>
            <RowCell>
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name?.message}</span>
              )}
              <Input
                type="text"
                placeholder="Nome"
                reference={register("name")}
              />
            </RowCell>
            <RowCell>
              {errors.surname && (
                <span style={{ color: "red" }}>{errors.surname?.message}</span>
              )}
              <Input
                type="text"
                placeholder="Sobrenome"
                reference={register("surname")}
              />
            </RowCell>
          </FormRow>

          <FormRow>
            <RowCellMerge>
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email?.message}</span>
              )}
              <Input
                type="email"
                placeholder="Email"
                reference={register("email")}
              />
            </RowCellMerge>
          </FormRow>

          <FormRow>
            <RowCell>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password?.message}</span>
              )}
              <Input
                type="password"
                placeholder="Senha"
                reference={register("password")}
              />
            </RowCell>
            <RowCell>
              {errors.confirmation && (
                <span style={{ color: "red" }}>
                  {errors.confirmation?.message}
                </span>
              )}
              <Input
                type="password"
                placeholder="Confirmar senha"
                reference={register("confirmation")}
              />
            </RowCell>
          </FormRow>

          <FormRow>
            <TextStyled>
              <p>Data de nascimento:</p>
            </TextStyled>
            <RowCellInputDate>
              {errors.birth_day && (
                <span style={{ color: "red" }}>
                  {errors.birth_day?.message}
                </span>
              )}
              <InputDate reference={register("birth_day")} />
            </RowCellInputDate>
          </FormRow>

          <FormRow>
            <ContainerSingle>
              <TextContainer>
                <p>Especialização</p>
                <AiFillInfoCircle />
              </TextContainer>
              <ContainerInputSingle>
                {errors.specialization && (
                  <span style={{ color: "red" }}>
                    {errors.specialization?.message}
                  </span>
                )}
                <Input type="text" reference={register("specialization")} />
              </ContainerInputSingle>
            </ContainerSingle>

            <ContainerSingle>
              <TextContainer>
                <p>Categoria</p>
              </TextContainer>
              <ContainerInputSingle>
                {errors.category && (
                  <span style={{ color: "red" }}>
                    {errors.category?.message}
                  </span>
                )}
                <InputSelect reference={register("category")}>
                  <SelectOption></SelectOption>
                  <SelectOption>Biológicas</SelectOption>
                  <SelectOption>Exatas</SelectOption>
                  <SelectOption>Humanas</SelectOption>
                  <SelectOption>Linguagens</SelectOption>
                  <SelectOption>Outras</SelectOption>
                </InputSelect>
              </ContainerInputSingle>
            </ContainerSingle>
          </FormRow>

          <FormRow>
            <ContainerTextArea>
              <p>Conte mais sobre você...</p>
              <ContainerSingleTextArea>
                {errors.description && (
                  <span style={{ color: "red" }}>
                    {errors.description?.message}
                  </span>
                )}
                <InputTextArea reference={register("description")} />
              </ContainerSingleTextArea>
            </ContainerTextArea>
          </FormRow>
          <RowButton>
            <Button colorBG={"var(--call-to-action)"} type="submit">
              Cadastrar
            </Button>
            <div>
              <p>
                Já possui uma conta? <span>Clique aqui</span> para entrar.
              </p>
            </div>
          </RowButton>
        </form>
      </Container>
    </>
  );
};

export default FormTeacher;
