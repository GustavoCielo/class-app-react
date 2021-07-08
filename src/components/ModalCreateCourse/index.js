import {
  Container,
  SubContainer1,
  SubContainer2,
  SubContainer31,
  SubContainer32,
  SubContainer3,
  SubContainer4,
  SubContainer5,
  SubContainer6,
  Title,
  IconContainer,
  SelectContainer,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import { IoIosCloseCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const ModalCreateCourse = () => {
  const history = useHistory();

  const formSchemaCourse = yup.object().shape({
    // name: yup
    //   .string()
    //   .required("Campo Obrigatório")
    //   .max(20, "Máximo de 20 caracteres"),
    // value: yup.string().required("Campo Obrigatório"),
    // duration: yup.string().required("Campo Obrigatório"),
    // category: yup
    //   .string()
    //   .required("Campo Obrigatório")
    //   .oneOf(
    //     [
    //       "Idiomas",
    //       "Tecnologia",
    //       " Ciências Biológicas",
    //       "Educação",
    //       "Negócios",
    //       "Marketing e publicidade",
    //       "Moda e beleza",
    //       "Saude",
    //       "Turismo",
    //       "Gastronomia",
    //       "Música",
    //       "Arte e entretenimento",
    //       "Ciências Exatas",
    //       "Ciências Humanas",
    //       "Auto-ajuda",
    //     ],
    //     "Escolha uma das opções"
    //   ),
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
        <Input placeholder="Nome" name="name" {...register("name")} />
      </SubContainer2>
      <SubContainer3>
        <Input placeholder="Valor" name="value" {...register("value")} />
      </SubContainer3>
      <SubContainer4>
        <label>Categoria</label>
        <Input name="category" {...register("category")} />
      </SubContainer4>
      <SubContainer4>
        <label>Descrição</label>
        <Input>
          <SelectContainer
            placeholder="Descrição"
            name="description"
            {...register("description")}
          >
            <option value=""></option>
            <option value="Idiomas">Idiomas</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Ciências Biológicas">Ciências Biológicas</option>
            <option value="Educação">Educação</option>
            <option value="Negócios">Negócios</option>
            <option value="Marketing e publicidade">
              Marketing e publicidade
            </option>
            <option value="Moda e beleza">Moda e beleza</option>
            <option value="Saude">Saude</option>
            <option value="Turismo">Turismo</option>
            <option value="Gastronomia">Gastronomia</option>
            <option value="Música">Música</option>
            <option value="Arte e entretenimento">Arte e entretenimento</option>
            <option value="Ciências Exatas">Ciências Exatas</option>
            <option value="Ciências Humanas">Ciências Humanas</option>
            <option value="Auto-ajuda">Auto-ajuda</option>
          </SelectContainer>
        </Input>
      </SubContainer4>
      <SubContainer6>
        <Button type="submit">Criar curso</Button>
      </SubContainer6>
    </Container>
  );
};

export default ModalCreateCourse;
