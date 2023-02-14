import { Close, Portal, Root, Trigger } from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { Cropper } from "react-cropper";

import * as S from "./styles";
import "cropperjs/dist/cropper.css";
import { Button } from "../../../Button";

interface CropModalProps {
  setCropModal: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
  setUpdateAvatar: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
  updateAvatar: string;
}

export function CropModal({
  updateAvatar,
  setCropModal,
  setUpdateAvatar,
  setAvatar,
}: CropModalProps) {
  const cropperRef = useRef<HTMLImageElement>(null);

  const [croppedImg, setCroppedImg] = useState("");

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setCroppedImg(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <Root open>
      <Trigger />
      <Portal>
        <S.Overlay />
        <S.Content>
          <S.Close onClick={() => setCropModal(null)}>
            <X color="#f5f5f5" />
          </S.Close>

          <S.Cropper>
            <Cropper
              src={updateAvatar}
              style={{ height: "100%", width: "100%" }}
              // Cropper.js options
              initialAspectRatio={1 / 1}
              guides={false}
              autoCropArea={1}
              aspectRatio={1 / 1}
              crop={onCrop}
              ref={cropperRef}
            />
          </S.Cropper>

          <Button
            text="Salvar"
            type="normal"
            onClick={() => {
              setUpdateAvatar(croppedImg);
              fetch(croppedImg)
                .then((res) => res.blob())
                .then((blob) => {
                  const file = new File([blob], "File name", { type: "image/png" });
                  setAvatar(file);
                });
              setCropModal(null);
            }}
          />
        </S.Content>
      </Portal>
    </Root>
  );
}
