import React from "react";

import StepsContainer from "./component-parts/StepsContainer";
import { Formik } from "formik";
import { Typography } from "@material-ui/core";
import Checkbox from "./component-parts/Checkbox";
import Form from "./component-parts/Form";
import Telephone from "./component-parts/Telephone";
import Button from "./component-parts/Button";
import { useHistory } from "react-router-dom";
import Input from "./component-parts/Input";
import * as yup from "yup";
import { useData } from "../DataContext";

const validateEmail = yup.object().shape({ email: yup.string().email() });

const Step2 = () => {
  const history = useHistory();
  const { setValues, data } = useData();
  return (
    <React.Fragment>
      {/*<StepsContainer>*/}
      <Typography variant="h5">Step 2</Typography>
      <Formik
        initialValues={{
          email: data.email,
          hasTelephoneNumber: data.hasTelephoneNumber,
          telephoneNumber: data.telephoneNumber,
        }}
        validationSchema={validateEmail}
        onSubmit={(values) => {
          history.push("./step3");
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
          setFieldValue,
          ...props
        }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              onChange={() => {
                setValues(values);
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
                name="hasTelephoneNumber"
                onChange={handleChange}
                setFormikValue={setFieldValue}
                hasTelephoneNumber={values.hasTelephoneNumber}
              />
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
      {/*</StepsContainer>*/}
    </React.Fragment>
  );
};

export default Step2;
