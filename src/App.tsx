import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { useContext, useState } from "react";
import { Routes } from "./routes";
import { ThemeContext } from "./styles/themes/ThemeContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./services/AuthContext";
import { CookiesProvider } from "react-cookie";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={() => (theme === "dark" ? defaultTheme.dark : defaultTheme.light)}>
      <CookiesProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CookiesProvider>
      <Toaster
        toastOptions={{
          style: {
            background: defaultTheme[theme === "dark" ? "dark" : "light"]["background-light"],
            color: defaultTheme[theme === "dark" ? "dark" : "light"].text,
          },
        }}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
