import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  activeCircle: {
    backgroundColor: "#3f51b5",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
    marginLeft: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundImage: "linear-gradient(#798AE5, #3f51b5)",
      border: "1px solid black",
    },
  },
  notActiveCircle: {
    backgroundColor: "grey",
    width: "30px",
    height: "30px",
    // border: "1px dashed black",
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
    marginLeft: "5px",
    opacity: "50%",
  },
  circlesRaw: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const Circle = (props) => {
  const styles = useStyles();
  const history = useHistory();
  const currentStep = parseInt();
  // history.location.pathname[history.location.pathname.length - 1]
  const path = `/step${props.index + 1}`;
  return (
    <div
      onClick={(event) => {
        if (currentStep > props.index) history.push(path);
        // console.log(newPath);
      }}
      className={
        currentStep > props.index ? styles.activeCircle : styles.notActiveCircle
      }
    >
      {props.index + 1}
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return <Circle index={props.index} />;
};
