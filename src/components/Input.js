import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "normal",
    width: "100%",
    marginTop: "10px",
  },
}));

const Input = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <TextField className={styles.input} {...props} fullWidth noValidate>
      {children}
    </TextField>
  );
};
export default Input ;