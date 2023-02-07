import { MenuItem } from "@szhsin/react-menu";
import { HouseSimple, Plus, User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/AuthContext";
import { AuthToken } from "../../services/authToken";
import { Wrapper } from "../Page/styles";
import * as S from "./styles";

export function Header() {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);

  function handleHome() {
    navigation("/");
  }

  function handleProfile() {
    navigation("/user");
  }

  function handleCreateGoal() {
    navigation("/create-goal");
  }

  useEffect(() => {
    if (!user) {
      return navigation("/login");
    }

    AuthToken(user.token);
  }, []);

  return (
    <S.Container>
      <Wrapper>
        <S.PopUp
          menuButton={
            <S.Content>
              <img src={user?.user?.avatar_url} />
              <S.Info>
                <span>Olá,</span>
                <strong>{user?.user?.name || ""}!</strong>
              </S.Info>
            </S.Content>
          }
        >
          <MenuItem onClick={handleHome}>
            <HouseSimple size={24} />
            <span>Home</span>
          </MenuItem>

          <MenuItem onClick={handleProfile}>
            <User size={24} />
            <span>Editar Perfil</span>
          </MenuItem>

          <MenuItem onClick={handleCreateGoal}>
            <Plus size={24} />
            <span>Criar meta</span>
          </MenuItem>
        </S.PopUp>
      </Wrapper>
    </S.Container>
  );
}
