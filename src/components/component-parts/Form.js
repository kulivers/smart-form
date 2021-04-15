import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return <form className={styles.form} {...props}>{children}</form>;
};
export default Form;