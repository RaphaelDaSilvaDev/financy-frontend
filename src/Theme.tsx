import App from "./App";
import { Theme as ThemeStyle } from "./styles/themes/ThemeContext";

function Theme() {
  return (
    <ThemeStyle>
      <App />
    </ThemeStyle>
  );
}

export default Theme;
