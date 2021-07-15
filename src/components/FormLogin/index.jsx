import {
  Container,
  TextContainer,
  FormRow,
  RowCellMerge,
  RowButton,
} from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Input from "../Input";
import Button from "../Button";

import { useAuth } from "../../providers/Authentication";
import { useHistory, Link } from "react-router-dom";

const FormLogin = () => {
  const history = useHistory();
  const { login } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    login(data, history);
    /* console.log(data); */
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormRow>
            <TextContainer>
              <h5>Entre no ClassApp</h5>
            </TextContainer>
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
            <RowCellMerge>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password?.message}</span>
              )}
              <Input
                type="password"
                placeholder="Senha"
                reference={register("password")}
              />
            </RowCellMerge>
          </FormRow>

          <RowButton>
            <Button colorBG={"var(--call-to-action)"} type="submit">
              Entrar
            </Button>
            <div>
              <p>
                Não possui uma conta?{" "}
                <span>
                  <Link to="/register" style={{ color: "black" }}>
                    Inscreva-se!
                  </Link>
                </span>
              </p>
            </div>
          </RowButton>
        </form>
      </Container>
    </>
  );
};

export default FormLogin;
