import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: "dark" | "light";
  handleToggleTheme(): void;
}

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function Theme({ children }: ThemeProps) {
  const getTheme = localStorage.getItem("@financy:theme") as "dark" | "light";
  const [theme, setTheme] = useState<"dark" | "light">(getTheme);

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const getTheme = localStorage.getItem("@financy:theme");

    if (getTheme === theme) return;

    localStorage.setItem("@financy:theme", theme);
  }, [theme]);

  useEffect(() => {
    const getTheme = localStorage.getItem("@financy:theme") as "dark" | "light";
    if (getTheme) {
      setTheme(getTheme);
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
