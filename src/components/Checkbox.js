import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ cb: { alignSelf: "center" } });

export default (props) => {
  const styles = useStyles();

  const onValueChange = (hasTelephoneNumber) => {
    props.setFormikValue("hasTelephoneNumber", !props.hasTelephoneNumber);
  };

  return (
    <FormControlLabel
      className={styles.cb}
      control={<Checkbox onChange={onValueChange}></Checkbox>}
      label="I have a telephone number"
    ></FormControlLabel>
  );
};
