import StepsContainer from "./StepsContainer";
import { Formik } from "formik";
import { Typography } from "@material-ui/core";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Telephone from "./Telephone";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import * as yup from "yup";

const validateEmail = yup.object().shape({ email: yup.string().email() });

const Step2 = () => {
  const history = useHistory();

  return (
    <StepsContainer>
      <Typography variant="h5">Step 2</Typography>
      <Formik
        initialValues={{
          email: "",
          hasTelephoneNumber: false,
          telephoneNumber: "",
        }}
        validationSchema={validateEmail}
        onSubmit={(values) => {
          history.push("./step3");
        }}
      >
        {({
          handleBlur,
          touched,
          handleChange,
          handleSubmit,
          errors,
          values,
          setFieldValue,
          ...props
        }) => {
          // console.log("Step2 values: ", values);

          return (
            <Form
              onSubmit={handleSubmit}
              onChange={() => {
                console.log(values);
              }}
            >
              <Input
                type={"text"}
                label="Email"
                name={"email"}
                onChange={handleChange}
                value={values.email}
                error={!!errors.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors.email}
                </div>
              ) : null}
              <Checkbox
                onChange={handleChange}
                setFormikValue={setFieldValue}
                hasTelephoneNumber={values.hasTelephoneNumber}
              ></Checkbox>
              {values.hasTelephoneNumber && (
                <Telephone
                  onChange={handleChange}
                  setFormikValue={setFieldValue}
                />
              )}
              <Button>Next</Button>
            </Form>
          );
        }}
      </Formik>
    </StepsContainer>
  );
};

export default Step2;
