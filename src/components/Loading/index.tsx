import { useContext } from "react";
import PlaceholderLoading from "react-placeholder-loading";
import { defaultTheme } from "../../styles/themes/default";
import { ThemeContext } from "../../styles/themes/ThemeContext";
import * as S from "./styles";

export function Loading() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.LoadingContainer>
      <PlaceholderLoading
        width={"100%"}
        height={"100%"}
        shape="rect"
        colorStart={defaultTheme.light["background-light"]}
        colorEnd={defaultTheme.light.background}
      />
    </S.LoadingContainer>
  );
}
