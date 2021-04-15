import StepsContainer from "./component-parts/StepsContainer";
import { Formik } from "formik";
import { Typography } from "@material-ui/core";
import Form from "./component-parts/Form";
import Button from "./component-parts/Button";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useDropzone } from "react-dropzone";

const UploadComponent = (props) => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
  });
  const dz = useDropzone();
  // console.log(dz);
  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

const Step3 = (props) => {
  const { setValues, data } = useData();
  // console.log(props);
  return (
    <StepsContainer>
      <Typography variant="h5">Step 1</Typography>
      <Formik
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          files: data.files,
        }}
        onSubmit={(values) => {
          console.log({
            files: values.files.map((file) => ({
              fileName: file.name,
              type: file.type,
              size: `${file.size} bytes`,
            })),
          });
        }}
        validationSchema={yup.object().shape({
          files: yup.mixed().required(),
        })}
      >
        {({ handleSubmit, setFieldValue, values, ...props }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="file">Multiple files upload</label>
                <UploadComponent setFieldValue={setFieldValue} />
                {values.files &&
                  values.files.map((file, i) => (
                    <li key={i}>
                      {`File:${file.name} Type:${file.type} Size:${file.size} bytes`}{" "}
                    </li>
                  ))}
              </div>
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
          );
        }}
      </Formik>
    </StepsContainer>
  );
};

export default Step3;
