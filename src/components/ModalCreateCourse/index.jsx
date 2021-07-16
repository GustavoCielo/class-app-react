import {
  Container,
  Form1,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  SubContainer31,
  SubContainer4,
  Title,
  IconContainer,
  Form2,
  Question,
  CustomCheckbox,
  LabelCheck,
  InputCheck,
  ContainerLink,
  CustomSelect,
  SelectForm,
  ButtonNext,
} from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { getCourseDays } from "../Calendar/helpers";
import { useState } from "react";
import { useUsers } from "../../providers/Users";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import Input from "../Input";
import InputSelect from "../InputSelect";
import InputTextArea from "../InputTextArea";
import SelectOption from "../SelectOption";
import api from "../../services/api";

const ModalCreateCourse = ({ handleModal }) => {
  const { user, handleUser } = useUsers();
  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  handleUser();

  const [selectedForm, setSelectedForm] = useState(1);
  const [error, setError] = useState(false);

  let schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    price: yup
      .string()
      .required("Campo Obrigatório")
      .max(5, "Máximo de 7 caracteres"),
    category: yup.string().required("Campo Obrigatório"),
    totalHours: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    daysOfWeek: yup.array(),
    hoursPerDay: yup.number(),
    link: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const stringfyDate = (date) => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const stringfyDateArray = (arr) => {
    return arr.map((date) => stringfyDate(date));
  };

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const onSubmitData = (data) => {
    if (data.daysOfWeek.length > 0) {
      api
        .post("/courses", { userId: user.id, ...data, rating: 0 }, headers)
        .then((res) =>
          api.post(
            "/class",
            {
              userId: user.id,
              coursesId: res.data.id,
              studentList: [],
              agenda: stringfyDateArray(getCourseDays(data)),
            },
            headers
          )
        );
    } else {
      setError(true);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitData)}>
      <SubContainer1>
        <Title>Crie seu curso</Title>
        <IconContainer onClick={handleModal}>
          <IoIosCloseCircle className="figure" />
        </IconContainer>
      </SubContainer1>
      <Form1 clicked={selectedForm === 1}>
        <SubContainer2>
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name?.message}</span>
          )}
          <Input placeholder="Nome" name="name" reference={register("name")} />
        </SubContainer2>
        <SubContainer2>
          {errors.price && (
            <span style={{ color: "red" }}>{errors.price?.message}</span>
          )}
          <Input
            placeholder="Valor"
            name="price"
            reference={register("price")}
          />
        </SubContainer2>
        <SubContainer2>
          {errors.totalHours && (
            <span style={{ color: "red" }}>{errors.totalHours?.message}</span>
          )}
          <Input
            placeholder="Carga horária"
            name="totalHours"
            reference={register("totalHours")}
          />
        </SubContainer2>
        <SubContainer3>
          <label>Categoria</label>
          <SubContainer31>
            {errors.description && (
              <span style={{ color: "red" }}>
                {errors.description?.message}
              </span>
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
              <SelectOption value="Ciências Exatas">
                Ciências Exatas
              </SelectOption>
              <SelectOption value="Ciências Humanas">
                Ciências Humanas
              </SelectOption>
              <SelectOption value="Auto-ajuda">Auto-ajuda</SelectOption>
            </InputSelect>
          </SubContainer31>
        </SubContainer3>
        <SubContainer3>
          <label>Descrição</label>
          {errors.category && (
            <span style={{ color: "red" }}>{errors.category?.message}</span>
          )}
          <InputTextArea
            name="description"
            reference={register("description")}
            height="50px"
          />
        </SubContainer3>
      </Form1>

      <Form2 clicked={selectedForm === 2}>
        {error && (
          <span style={{ color: "red" }}>Selecione ao menos 1 dia</span>
        )}
        <Question>Gostaria de ministrar nos seguintes dias da semana:</Question>
        <CustomCheckbox>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Dom"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Domingo
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Seg"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Segunda
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Ter"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Terça
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Qua"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Quarta
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Qui"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Quinta
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Sex"
              name="daysOfWeek"
              {...register("daysOfWeek")}
            />
            Sexta
          </LabelCheck>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              value="Sab"
              name="daysOfWeek"
              {...register("daconsole.logysOfWeek")}
            />
            Sabado
          </LabelCheck>
        </CustomCheckbox>

        <Question>Quantidade de horas por dia</Question>
        <SubContainer3>
          <SubContainer31>
            <InputSelect name="hoursPerDay" reference={register("hoursPerDay")}>
              <SelectOption value="1">1 hora</SelectOption>
              <SelectOption value="2">2 horas</SelectOption>
              <SelectOption value="3">3 horas</SelectOption>
            </InputSelect>
          </SubContainer31>
        </SubContainer3>

        <Question>Link para local de encontro</Question>
        <ContainerLink>
          <Input
            placeholder="Ex: Zoom, Meet..."
            placeholderSize="0.7rem"
            name="link"
            reference={register("link")}
          />
        </ContainerLink>
      </Form2>

      <SubContainer4>
        <CustomSelect>
          <SelectForm
            clicked={selectedForm === 1}
            onClick={() => setSelectedForm(1)}
          >
            <div />
          </SelectForm>
          <SelectForm
            clicked={selectedForm === 2}
            onClick={() => setSelectedForm(2)}
          >
            <div />
          </SelectForm>
        </CustomSelect>
        {selectedForm === 1 ? (
          <ButtonNext onClick={() => setSelectedForm(2)}>Próximo</ButtonNext>
        ) : (
          <Button type="submit" colorBG={"var(--call-to-action)"}>
            Criar curso
          </Button>
        )}
      </SubContainer4>
    </Container>
  );
};

export default ModalCreateCourse;
