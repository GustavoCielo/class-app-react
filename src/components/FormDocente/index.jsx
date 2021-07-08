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

import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";

import Input from "../Input";
import InputDate from "../InputDate";
import InputSelect from "../InputSelect";
import SelectOption from "../SelectOption";
import InputTextArea from "../InputTextArea";
import Button from "../Button";

const FormDocente = () => {
  return (
    <>
      <Container>
        <form>
          <FormRow>
            <TextContainer>
              <h5>Cadastre-se como docente</h5>
              <AiFillCloseCircle />
            </TextContainer>
          </FormRow>

          <FormRow>
            <RowCell>
              <Input type="text" placeholder="Nome" name="name" />
            </RowCell>
            <RowCell>
              <Input type="text" placeholder="Sobrenome" name="surname" />
            </RowCell>
          </FormRow>

          <FormRow>
            <RowCellMerge>
              <Input type="email" placeholder="Email" name="email" />
            </RowCellMerge>
          </FormRow>

          <FormRow>
            <RowCell>
              <Input type="password" placeholder="Senha" name="password" />
            </RowCell>
            <RowCell>
              <Input
                type="password"
                placeholder="Confirmar senha"
                name="confirmation"
              />
            </RowCell>
          </FormRow>

          <FormRow>
            <TextStyled>
              <p>Data de nascimento:</p>
            </TextStyled>
            <RowCellInputDate>
              <InputDate />
            </RowCellInputDate>
          </FormRow>

          <FormRow>
            <ContainerSingle>
              <TextContainer>
                <p>Especialização</p>
                <AiFillInfoCircle />
              </TextContainer>
              <ContainerInputSingle>
                <Input type="text" name="specialization" />
              </ContainerInputSingle>
            </ContainerSingle>

            <ContainerSingle>
              <TextContainer>
                <p>Categoria</p>
              </TextContainer>
              <ContainerInputSingle>
                <InputSelect name="category">
                  <SelectOption></SelectOption>
                  <SelectOption>Biológicas</SelectOption>
                  <SelectOption>Exatas</SelectOption>
                  <SelectOption>Humanas</SelectOption>
                </InputSelect>
              </ContainerInputSingle>
            </ContainerSingle>
          </FormRow>

          <FormRow>
            <ContainerTextArea>
              <p>Conte mais sobre você...</p>
              <ContainerSingleTextArea>
                <InputTextArea name="description" />
              </ContainerSingleTextArea>
            </ContainerTextArea>
          </FormRow>
        </form>

        <RowButton>
          <Button colorBG={"var(--call-to-action)"}>Cadastrar</Button>
          <div>
            <p>
              Já possui uma conta? <span>Clique aqui</span> para entrar.
            </p>
          </div>
        </RowButton>
      </Container>
    </>
  );
};

export default FormDocente;
