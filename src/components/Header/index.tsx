import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { CaretDown, CaretUp, HouseSimple, Plus, SignOut, User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/AuthContext";
import { AuthToken } from "../../services/authToken";
import { Wrapper } from "../Page/styles";
import * as S from "./styles";

import "@szhsin/react-menu/dist/transitions/slide.css";

export function Header() {
  const navigation = useNavigate();
  const path = useLocation();
  const { user, handleOnSignOut } = useContext(AuthContext);

  function handleHome() {
    navigation("/");
  }

  function handleProfile() {
    navigation("/user");
  }

  function handleCreateGoal() {
    navigation("/goal/create");
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
        <S.Content>
          <S.ProfileContent>
            {user?.user?.avatar ? (
              <img src={user.user.avatar} />
            ) : (
              <S.Avatar>
                <User color="#FFF" size={48} />
              </S.Avatar>
            )}
            <S.Info>
              <span>Olá,</span>
              <strong>{user?.user?.name || ""}!</strong>
            </S.Info>
          </S.ProfileContent>

          <S.PopUp
            menuButton={({ open }) => (
              <S.PopUpButton>
                {open ? <CaretUp size={24} /> : <CaretDown size={24} />}
              </S.PopUpButton>
            )}
            transition
            offsetX={-164}
            offsetY={8}
          >
            <MenuItem onClick={handleHome} disabled={path.pathname === "/"}>
              <HouseSimple size={24} />
              <span>Home</span>
            </MenuItem>

            <MenuItem onClick={handleProfile} disabled={path.pathname === "/user"}>
              <User size={24} />
              <span>Editar Perfil</span>
            </MenuItem>

            <MenuItem onClick={handleCreateGoal} disabled={path.pathname.includes("/goal")}>
              <Plus size={24} />
              <span>Criar Meta</span>
            </MenuItem>

            <MenuItem className="getOut" onClick={handleOnSignOut}>
              <SignOut size={24} />
              <span>Sair da Conta</span>
            </MenuItem>
          </S.PopUp>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
}
