import React, { useCallback, useState } from "react";
import { useData } from "../DataContext";
import { useDropzone } from "react-dropzone";
import UploadingProcessFile from "./component-parts/UploadingProgressFile";

const Step3 = (props) => {
  const [files, setFiles] = useState([]);
  const { data, setData } = useData();
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // console.log(acceptedFiles);
    const mappedFiles = acceptedFiles.map((file) => ({ file, errors: [] }));
    setFiles((prev) => [...prev, ...mappedFiles, ...rejectedFiles]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onDelete = (file) => {
    setFiles((cur) => {
      cur.filter((fw) => fw.file !== file);
    });
  };

  const onUpload = (file, url) => {
    setFiles((curr) => {
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      });
    });
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {<p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      {files.map((fileWrapper, index) => {
        return (
          <UploadingProcessFile
            key={index}
            file={fileWrapper.file}
          />
        );
      })}
    </div>
  );
};

export default Step3;
