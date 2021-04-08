import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button
      {...props}
      type="submit"
      className={styles.button}
      variant={"contained"}
      color={"primary"}
      fullWidth
    >
      {children}
    </Button>
  );
};
