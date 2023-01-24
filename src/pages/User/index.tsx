import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Page } from "../../components/Page";
import { Wrapper } from "../../components/Page/styles";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { Widget } from "../../components/Widget";
import { AuthContext } from "../../services/AuthContext";
import { ThemeContext } from "../../styles/themes/ThemeContext";
import { UserSchema, UserSchemaType } from "./schema";
import { PayloadProps, UpdateProfile } from "./services";

import * as S from "./styles";

export function User() {
  const { user, setCookies, handleOnSignin } = useContext(AuthContext);
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  const method = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    mode: "onSubmit",
  });

  async function handleOnEditProfile() {
    const name = method.getValues("name");
    const password = method.getValues("password");

    if (!name && !password)
      return ToastStyle({ message: "Preencha um dos campos para salvar", styleToast: "warning" });

    const payload: PayloadProps = {};

    if (name) payload.name = name;
    if (password) payload.password = password;

    name ? (user.user.name = name) : "";

    try {
      await UpdateProfile(payload);
      setCookies("user", user);
      ToastStyle({
        message: "Successfully updated user",
        styleToast: "success",
      });
      method.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function onErrorHandleOnEditProfile() {
    const errors = Object.values(method.formState.errors);

    errors.map((error) => {
      ToastStyle({
        message: error.message ? error.message : "Algo deu errado",
        styleToast: "warning",
      });
    });
  }

  return (
    <Wrapper>
      <S.Container>
        <Widget title="Editar Perfil">
          <FormProvider {...method}>
            <S.EditProfile
              onSubmit={method.handleSubmit(handleOnEditProfile, onErrorHandleOnEditProfile)}
            >
              <Input label="Nome" placeHolder={user.user.name} registerValue="name" type="text" />
              <Input label="Senha" placeHolder="******" registerValue="password" type="password" />
              <Button text="Salvar Edição" />
            </S.EditProfile>
          </FormProvider>
        </Widget>

        <Widget title="Tema">
          <S.SwitchTheme>
            <span>Preferência de tema escuro</span>
            <label className="switch">
              <input type="checkbox" checked={theme === "dark"} onChange={handleToggleTheme} />
              <span className="slider"></span>
            </label>
          </S.SwitchTheme>
        </Widget>

        <Button text="Sair da Conta" type="danger" onClick={handleOnSignin} />
      </S.Container>
    </Wrapper>
  );
}
