import { useContext, useState } from "react";
import { render } from "react-dom";
import { AuthContext } from "../../services/AuthContext";
import * as S from "./styles";

interface InputFileProps {
  setAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export function InputFile({ setAvatar }: InputFileProps) {
  const { user } = useContext(AuthContext);
  const [updateAvatar, setUpdateAvatar] = useState<string>("");

  function handleFile({ target }: React.ChangeEvent<HTMLInputElement>) {
    const file = target && target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAvatar(file);
    }
  }

  return (
    <S.Container>
      <label htmlFor="UserImage">
        <span>Atualizar foto</span>
      </label>
      <input
        name="UserImage"
        type="file"
        id="UserImage"
        accept="image/*"
        hidden
        onChange={handleFile}
      />
      {user && user.user && user.user.avatar_url && !updateAvatar ? (
        <S.Image src={user.user.avatar_url as string} />
      ) : updateAvatar ? (
        <S.Image src={updateAvatar} />
      ) : (
        <S.NoImage htmlFor="UserImage" />
      )}
    </S.Container>
  );
}
