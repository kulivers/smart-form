import React from "react";
import StepsContainer from "./component-parts/StepsContainer";
import { Formik } from "formik";
import { Typography } from "@material-ui/core";
import Form from "./component-parts/Form";
import Input from "./component-parts/Input";
import Button from "./component-parts/Button";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";

const validationStep1 = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^([^0-9]*)$/, "Your name shouldnt contain numbers")
    .required("Required"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Your name shouldnt contain numbers")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Step1 = () => {
  const history = useHistory(); //its avalible from props
  const { setValues, data } = useData();
  // console.log(props);
  return (
    <React.Fragment>
      {/*<StepsContainer>*/}
      <Typography variant="h5">Step 1</Typography>
      <Formik
        initialValues={{ firstName: data.firstName, lastName: data.lastName }}
        validationSchema={validationStep1}
        onSubmit={(values) => {
          history.push("./step2");
          setValues(values);
        }}
      >
        {({
          handleBlur,
          touched,
          handleChange,
          handleSubmit,
          errors,
          values,
          ...props
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Input
                type={"text"}
                label="First name"
                name={"firstName"}
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur}
                error={!!errors.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors.firstName}
                </div>
              ) : null}
              <Input
                type={"text"}
                label="Last name"
                name={"lastName"}
                onChange={handleChange}
                value={values.lastName}
                error={!!errors.lastName}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors.lastName}
                </div>
              ) : null}
              {/*<Link to="/step2">*/}
              <Button>Next</Button>
              {/*</Link>*/}
            </Form>
          );
        }}
      </Formik>
      {/*</StepsContainer>*/}
    </React.Fragment>
  );
};

export default Step1;
