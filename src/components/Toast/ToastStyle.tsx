import { toast } from "react-hot-toast";

import Warning from "../../assets/toast/warning.png";
import Error from "../../assets/toast/error.png";
import Success from "../../assets/toast/success.png";

import * as S from "./styles";

interface ToastProps {
  message: string;
  styleToast: "success" | "error" | "warning";
}

export function ToastStyle({ message, styleToast }: ToastProps) {
  const errorStyle = {
    style: {
      maxWidth: 500,
    },
    duration: 4000,
    icon: <img src={Error} style={{ height: "24px" }} />,
  };

  const successStyle = {
    style: {
      maxWidth: 500,
    },
    duration: 2000,
    icon: <img src={Success} style={{ height: "24px" }} />,
  };

  const warningStyle = {
    style: {
      maxWidth: 500,
    },
    duration: 4000,
    icon: <img src={Warning} style={{ height: "24px" }} />,
  };

  const style =
    styleToast === "error" ? errorStyle : styleToast === "success" ? successStyle : warningStyle;

  return toast(
    (t) => (
      <S.Container>
        <span>{message}</span>
      </S.Container>
    ),
    {
      ...style,
    }
  );
}
