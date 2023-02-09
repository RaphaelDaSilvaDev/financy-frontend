import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/financy.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Page } from "../../components/Page";
import { LoginSchema, LoginSchemaType } from "./schema";
import * as S from "./styles";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import axios from "axios";
import { AuthenticationApi } from "./service";
import { useCookies } from "react-cookie";
import { AuthToken } from "../../services/authToken";
import { Wrapper } from "../../components/Page/styles";
import { CaretDown } from "phosphor-react";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

export function Login() {
  const [cookies, setCookies] = useCookies(["user"]);
  const path = useLocation();

  const navigation = useNavigate();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
  });

  async function handleLogin() {
    const email = methods.watch("email");
    const password = methods.watch("password");
    try {
      const response = await AuthenticationApi({ email, password });
      if (response.status === 200) {
        const { data } = response;
        setCookies("user", data, { path: "/" });
        AuthToken(data.token);
        navigation("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function onHandleLoginFail() {
    const errors = Object.values(methods.formState.errors);

    errors.map((error) => {
      ToastStyle({ message: error.message ? error.message : "", styleToast: "warning" });
    });
  }

  return (
    <Page>
      <meta name="apple-mobile-web-app-capable" content="yes" />
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

            <S.ArrowDown>
              <HashLink to={`${path.pathname}/#content`} smooth>
                <CaretDown size={24} />
              </HashLink>
            </S.ArrowDown>
          </S.Hero>

          <FormProvider {...methods}>
            <S.LoginContainer
              onSubmit={methods.handleSubmit(handleLogin, onHandleLoginFail)}
              id="content"
            >
              <S.LoginContent>
                <h2>Entrar com sua conta</h2>
                <S.InputsContainer>
                  <Input label="Email" placeHolder="Digite seu email" registerValue="email" />
                  <Input
                    label="Senha"
                    placeHolder="Digite sua senha"
                    type="password"
                    registerValue="password"
                  />
                  <Button text="Entrar" />
                  <a href="#">Esqueceu a senha?</a>
                </S.InputsContainer>

                <span>
                  Ainda não tem uma conta? <Link to="/signin">Crie uma aqui</Link>
                </span>
              </S.LoginContent>
            </S.LoginContainer>
          </FormProvider>
        </S.Container>
      </Wrapper>
    </Page>
  );
}
