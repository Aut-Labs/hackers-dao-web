import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadWrapper from "./file-upload.style";
import { ic_file_upload } from "react-icons-kit/md/ic_file_upload";
import {ic_delete_forever} from 'react-icons-kit/md/ic_delete_forever'
import Icon from "react-icons-kit";

function DefaultUploadSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="109.995"
      viewBox="0 0 110 109.995"
    >
      <g transform="translate(-3 -3.001)">
        <path
          d="M71.75 76.33v-9.167c2.062-1.022 7.961-8.044 8.58-13.53 1.623-.124 4.171-1.613 4.923-7.494.4-3.158-1.2-4.932-2.173-5.491A24.255 24.255 0 0085.5 30.5c0-11.128-4.368-20.625-13.75-20.625C71.75 9.876 68.491 3 58 3 38.557 3 30.5 15.472 30.5 30.5a27.317 27.317 0 002.42 10.147c-.972.559-2.576 2.338-2.173 5.491.752 5.88 3.3 7.37 4.923 7.494.619 5.486 6.518 12.508 8.58 13.53v9.168C39.667 90.08 3 80.913 3 113h110c0-32.087-36.667-22.92-41.25-36.67z"
          data-name="Path 1643"
        ></path>
      </g>
    </svg>
  );
}

const SwUploadFile = ({
  multiple = false,
  initialPreviewUrl = null,
  fileChange = (file) => null,
  defaulUploadIcon = <DefaultUploadSvg />,
}) => {
  const [preview, setPreview] = useState(initialPreviewUrl);
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    disabled: !!preview,
    accept: "image/jpeg, image/png",
    noClick: true,
    noKeyboard: true,
    onDrop: ([file]) => {
      const url = URL.createObjectURL(file);
      setPreview(url);
      fileChange(file);
    },
  });

  const handleActionClick = () => {
    if (preview) {
      setPreview(null);
      fileChange(null);
    } else {
      open();
    }
  };

  const Action = () => {
    return (
      <div onClick={handleActionClick} className="sw-upload-action">
        {preview ? (
          <Icon icon={ic_delete_forever} className="remove" />
        ) : (
          <Icon icon={ic_file_upload} className="upload" />
        )}
      </div>
    );
  };

  return (
    <UploadWrapper
      {...getRootProps({
        className: `sw-uploader-wrapper`,
      })}
    >
      <div className="avatar">
        {preview && <img alt="Avatar" src={preview} />}
        {!preview && <DefaultUploadSvg />}
      </div>
      <Action />
      <input {...getInputProps()} />
    </UploadWrapper>
  );
};

export default SwUploadFile;
