import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface ThemeContextProps {
  theme: "dark" | "light";
  handleToggleTheme(): void;
}

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function Theme({ children }: ThemeProps) {
  const [cookies, setCookies] = useCookies(["theme"]);
  const getTheme = cookies.theme;
  const [theme, setTheme] = useState<"dark" | "light">(getTheme ? getTheme : "light");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const getTheme = cookies.theme;

    if (getTheme === theme) return;

    setCookies("theme", theme);
  }, [theme]);

  useEffect(() => {
    const getTheme = cookies.theme;
    if (getTheme) {
      setTheme(getTheme ? getTheme : "light");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        handleToggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
