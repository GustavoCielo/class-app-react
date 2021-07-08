import {
  ContainerForm,
  FormRow,
  LabelDataForm,
  CellRowDate,
  ContainerLabel,
  Cell,
  CellTextArea,
  ContainerButton,
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
      <ContainerForm>
        <form>
          <FormRow>
            <p>Cadastre-se como docente</p>
            <AiFillCloseCircle />
          </FormRow>

          <FormRow>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Sobrenome" />
          </FormRow>

          <FormRow>
            <Input type="email" placeholder="Email" />
          </FormRow>

          <FormRow>
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Confirmar senha" />
          </FormRow>

          <FormRow>
            <CellRowDate>
              <LabelDataForm>Data de nascimento:</LabelDataForm>
            </CellRowDate>
            <InputDate />
          </FormRow>

          <FormRow>
            <Cell>
              <ContainerLabel>
                <p>Especialização</p>
                <AiFillInfoCircle />
              </ContainerLabel>
              <Input type="text" />
            </Cell>
            <Cell>
              <ContainerLabel>
                <p>Categoria</p>
              </ContainerLabel>
              <InputSelect>
                <SelectOption></SelectOption>
                <SelectOption>Humanas</SelectOption>
                <SelectOption>Exatas</SelectOption>
                <SelectOption>Biológicas</SelectOption>
              </InputSelect>
            </Cell>
          </FormRow>

          <FormRow>
            <CellTextArea>
              <div>
                <p>Conte mais sobre você...</p>
              </div>
              <InputTextArea />
            </CellTextArea>
          </FormRow>
        </form>

        <ContainerButton>
          <Button colorBG="var(--call-to-action)">Cadastre-se</Button>
          <p>
            Já possui uma conta? <span>Clique aqui</span> para entrar.
          </p>
        </ContainerButton>
      </ContainerForm>
    </>
  );
};

export default FormDocente;
