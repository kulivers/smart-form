import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    fontFamily: "PT Sans",
    textAlign: "center",
    margin: theme.spacing(10, 0, 0, 0),
    padding: theme.spacing(0, 3, 0, 3),
    fontSize: 40,
    backgroundColor: "red",
    display: "inline",
  },
}));
// const useStyles = makeStyles((theme) => ({header: {color: 'red', fontFamily: "Open Sans Condensed"}}));

const Header = () => {
  const styles = useStyles();
  return (
    <Typography className={styles.header} component="h1" variant="h5">
      My super smart form
    </Typography>
  );
};

export default Header;
