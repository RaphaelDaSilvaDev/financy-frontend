import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { InputSwitch } from "../../components/InputSwitch";
import { Wrapper } from "../../components/Page/styles";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { Widget } from "../../components/Widget";
import { AuthContext } from "../../services/AuthContext";
import { ThemeContext } from "../../styles/themes/ThemeContext";
import { UserSchema, UserSchemaType } from "./schema";
import { PayloadProps, UpdateProfile } from "./services";

import * as S from "./styles";

export function User() {
  const { user, setCookies } = useContext(AuthContext);
  const { handleToggleTheme } = useContext(ThemeContext);

  const [gender, setGender] = useState<any>(user?.user?.gender);
  const [avatar, setAvatar] = useState<File | undefined>(undefined);

  const method = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    mode: "onSubmit",
    defaultValues: {
      date: user.user.born || "",
    },
  });

  async function handleOnEditProfile() {
    const values = method.getValues();

    if (!values)
      return ToastStyle({ message: "Preencha um dos campos para salvar", styleToast: "warning" });

    const payload: PayloadProps = {};

    if (values.name) payload.name = values.name;
    if (values.password) payload.password = values.password;
    if (values.date) payload.born = values.date;
    if (gender) payload.gender = gender;
    if (avatar) payload.avatar = avatar as File;

    values.name ? (user.user.name = values.name) : "";

    try {
      const { data } = await UpdateProfile(payload);
      const userInfo = {
        token: user.token,
        user: data,
      };
      console.log(data);
      setCookies("user", userInfo);
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

  const genderOptions = [
    {
      id: 1,
      label: "Masculino",
      value: "Male",
    },
    {
      id: 2,
      label: "Feminino",
      value: "Famale",
    },
  ];

  useEffect(() => {
    method.setValue("date", user.user.born);
  }, [user]);

  return (
    <Wrapper>
      <S.Container>
        <Widget title="Editar Perfil">
          <FormProvider {...method}>
            <S.EditProfile
              onSubmit={method.handleSubmit(handleOnEditProfile, onErrorHandleOnEditProfile)}
            >
              <InputFile setAvatar={setAvatar} />
              <Input
                label="Data de Nascimento"
                registerValue="date"
                type="date"
                placeHolder={user.user.born}
              />

              <S.SelectContainer>
                <label>
                  <span>Sexo</span>
                </label>
                <S.SelectInput
                  options={genderOptions}
                  isSearchable={false}
                  defaultValue={user.user.gender}
                  placeholder={user.user.gender}
                  //@ts-ignore
                  onChange={(option) => setGender(option.label)}
                />
              </S.SelectContainer>

              <Input
                label="Nome"
                placeHolder={user && user.user ? user.user.name : ""}
                registerValue="name"
                type="text"
              />
              <Input label="Senha" placeHolder="******" registerValue="password" type="password" />
              <Button text="Salvar Edição" />
            </S.EditProfile>
          </FormProvider>
        </Widget>

        <Widget title="Tema">
          <S.SwitchTheme>
            <span>Preferência de tema escuro</span>
            <InputSwitch onChange={handleToggleTheme} />
          </S.SwitchTheme>
        </Widget>
      </S.Container>
    </Wrapper>
  );
}
