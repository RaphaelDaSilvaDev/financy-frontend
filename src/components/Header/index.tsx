import { Menu, MenuItem } from "@szhsin/react-menu";
import { HouseSimple, User } from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/AuthContext";
import { Wrapper } from "../Page/styles";
import * as S from "./styles";

export function Header() {
  const navigation = useNavigate();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  function handleHome() {
    setOpenMenu(false);
    navigation("/");
  }

  function handleProfile() {
    navigation("/user");
  }

  return (
    <S.Container>
      <Wrapper>
        <S.PopUp
          menuButton={
            <S.Content onClick={() => setOpenMenu(true)}>
              <img />
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
        </S.PopUp>
      </Wrapper>
    </S.Container>
  );
}
