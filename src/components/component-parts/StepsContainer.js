import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import StepsCircle from "./StepsCircle";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    padding: theme.spacing(2, 2, 8, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "green",
    boxShadow: "0 2px 4px rgba(0, 0, 0, .25)",
    width: "100%",
  },
  circlesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "10px",
  },
}));

export const StepsContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container name="StepsContainer" className={styles.container} maxWidth="sm">
      {React.Children.map(children, (child, index) => {
        return child;
      })}
      <hr />
      <div className={styles.circlesContainer}>
        {React.Children.map(children, (child, index) => {
          return <StepsCircle index={index} />;
        })}
      </div>
    </Container>
  );
};

export default StepsContainer;
