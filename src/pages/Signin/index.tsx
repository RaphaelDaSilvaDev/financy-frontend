import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/financy.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CheckBoxInput } from "../../components/CheckBoxInput";
import { Page } from "../../components/Page";
import * as S from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { SigninSchema, SigninSchemaType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { SigninApi } from "./services";
import axios from "axios";
import { useCookies } from "react-cookie";
import { AuthToken } from "../../services/authToken";
import { Wrapper } from "../../components/Page/styles";

export function Signin() {
  const [cookies, setCookies] = useCookies(["user"]);

  const navigation = useNavigate();

  const methods = useForm<SigninSchemaType>({
    resolver: zodResolver(SigninSchema),
    mode: "onSubmit",
  });

  async function handleSignin() {
    const name = methods.watch("name");
    const email = methods.watch("email");
    const password = methods.watch("password");
    const terms = methods.watch("terms");

    try {
      const response = await SigninApi({ name, email, password });
      if (response.status === 201) {
        const { data } = response;
        setCookies("user", data, { path: "/" });
        AuthToken(data.token);
        navigation("/user");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function onHandleSigninError() {
    const errors = Object.values(methods.formState.errors);

    errors.map((error) => {
      ToastStyle({ message: error.message ? error.message : "", styleToast: "warning" });
    });
  }

  return (
    <Page>
      <Wrapper>
        <S.Container>
          <S.Hero>
            <S.Logo>
              <img src={Logo} alt="" />
              <h1>Financy App</h1>
            </S.Logo>
            <S.SloganContainer>
              <span>Crie metas, organize seu dinheiro e gerencie seu futuro</span>
            </S.SloganContainer>
          </S.Hero>

          <FormProvider {...methods}>
            <S.LoginContainer onSubmit={methods.handleSubmit(handleSignin, onHandleSigninError)}>
              <h2>Crie uma nova conta</h2>
              <S.InputsContainer>
                <Input
                  label="Nome"
                  placeHolder="Digite seu nome"
                  type="text"
                  registerValue="name"
                />
                <Input
                  label="Email"
                  placeHolder="Digite seu email"
                  type="email"
                  registerValue="email"
                />
                <Input
                  label="Senha"
                  placeHolder="Digite sua senha"
                  type="password"
                  registerValue="password"
                />

                {
                  <S.Terms>
                    <CheckBoxInput label="Aceito os" registerValue="terms" />
                    <a href="">Termos de uso</a>
                  </S.Terms>
                }

                <Button text="Criar conta" />
              </S.InputsContainer>

              <span>
                Já tem uma conta? <Link to="/login"> Entre com ela</Link>
              </span>
            </S.LoginContainer>
          </FormProvider>
        </S.Container>
      </Wrapper>
    </Page>
  );
}
