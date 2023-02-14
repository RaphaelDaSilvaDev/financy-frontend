import { User } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../services/AuthContext";
import { CropModal } from "./components/CropModal";
import * as S from "./styles";

interface InputFileProps {
  setAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export function InputFile({ setAvatar }: InputFileProps) {
  const { user } = useContext(AuthContext);
  const [updateAvatar, setUpdateAvatar] = useState<string>("");
  const [cropModal, setCropModal] = useState<JSX.Element | null>(null);

  function handleFile({ target }: React.ChangeEvent<HTMLInputElement>) {
    const file = target && target.files && target.files[0];
    if (file) {
      setCropModal(
        <CropModal
          setCropModal={setCropModal}
          setUpdateAvatar={setUpdateAvatar}
          setAvatar={setAvatar}
          updateAvatar={URL.createObjectURL(file)}
        />
      );
    }
  }

  return (
    <S.Container>
      <label htmlFor="UserImage">
        <span>Atualizar foto</span>
      </label>

      {user.user.avatar_url && !updateAvatar ? (
        <S.GroupInfoImage htmlFor="image-upload">
          <img src={user.user.avatar_url} />
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      ) : updateAvatar ? (
        <S.GroupInfoImage htmlFor="image-upload">
          <img src={updateAvatar} />
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      ) : (
        <S.GroupInfoImage htmlFor="image-upload">
          <User color="#FFF" size={56} />
          <input id="image-upload" accept="image/*" type="file" onChange={(e) => handleFile(e)} />
        </S.GroupInfoImage>
      )}
      {cropModal}
    </S.Container>
  );
}
