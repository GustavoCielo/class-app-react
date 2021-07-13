import {
  Container,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  SubContainer31,
  SubContainer4,
  Title,
  IconContainer,
} from "./style";
import Button from "../Button";
import Input from "../Input";
import { IoIosCloseCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputSelect from "../InputSelect";
import SelectOption from "../SelectOption";
const ModalCreateCourse = () => {
  const history = useHistory();

  const formSchemaCourse = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    value: yup
      .string()
      .required("Campo Obrigatório")
      .max(5, "Máximo de 7 caracteres"),
    category: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaCourse) });

  const onSubmitData = (data) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitData)}>
      <SubContainer1>
        <Title>Crie seu curso</Title>
        <IconContainer>
          <IoIosCloseCircle className="figure" />
        </IconContainer>
      </SubContainer1>
      <SubContainer2>
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name?.message}</span>
        )}
        <Input placeholder="Nome" name="name" reference={register("name")} />
      </SubContainer2>
      <SubContainer2>
        {errors.value && (
          <span style={{ color: "red" }}>{errors.value?.message}</span>
        )}
        <Input placeholder="Valor" name="value" reference={register("value")} />
      </SubContainer2>
      <SubContainer3>
        <label>Categoria</label>
        <SubContainer31>
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description?.message}</span>
          )}

          <InputSelect name="category" reference={register("category")}>
            <SelectOption value=""></SelectOption>
            <SelectOption value="Idiomas">Idiomas</SelectOption>
            <SelectOption value="Tecnologia">Tecnologia</SelectOption>
            <SelectOption value="Ciências Biológicas">
              Ciências Biológicas
            </SelectOption>
            <SelectOption value="Educação">Educação</SelectOption>
            <SelectOption value="Negócios">Negócios</SelectOption>
            <SelectOption value="Marketing e publicidade">
              Marketing e publicidade
            </SelectOption>
            <SelectOption value="Moda e beleza">Moda e beleza</SelectOption>
            <SelectOption value="Saude">Saude</SelectOption>
            <SelectOption value="Turismo">Turismo</SelectOption>
            <SelectOption value="Gastronomia">Gastronomia</SelectOption>
            <SelectOption value="Música">Música</SelectOption>
            <SelectOption value="Arte e entretenimento">
              Arte e entretenimento
            </SelectOption>
            <SelectOption value="Ciências Exatas">Ciências Exatas</SelectOption>
            <SelectOption value="Ciências Humanas">
              Ciências Humanas
            </SelectOption>
            <SelectOption value="Auto-ajuda">Auto-ajuda</SelectOption>
          </InputSelect>
        </SubContainer31>
      </SubContainer3>
      <SubContainer3>
        <label>Descrição</label>
        <SubContainer31>
          {errors.category && (
            <span style={{ color: "red" }}>{errors.category?.message}</span>
          )}
          <Input name="description" reference={register("description")} />
        </SubContainer31>
      </SubContainer3>
      <SubContainer4>
        <Button
          type="submit"
          colorBG={"var(--call-to-action)"}
          onClick={() => {}}
        >
          Criar curso
        </Button>
      </SubContainer4>
    </Container>
  );
};

export default ModalCreateCourse;
