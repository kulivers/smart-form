import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "green",
  },
});

export const StepsContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container name="StepsContainer" className={styles.container} maxWidth="sm">
      {children}
    </Container>
  );
};

export default StepsContainer;
