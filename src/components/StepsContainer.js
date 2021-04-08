import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    padding: theme.spacing(2, 2, 8, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "gray",
    boxShadow: "0 2px 4px rgba(0, 0, 0, .25)",
    width: "100%",
  },
}));

export const StepsContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container name="StepsContainer" className={styles.container} maxWidth="sm">
      {children}
    </Container>
  );
};

export default StepsContainer;
