import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  circle: {
    backgroundColor: "gray",
    width: "100px",
    height: "100px",
    // background: "yellow",
    border: "3px solid red",
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
  },
});

const Circle = (props) => {
  const styles = useStyles();
  return <div className={styles.circle}>1</div>;
};

export default (props) => {
  const styles = useStyles();
  return (
    <div>
      <Circle />
    </div>
  );
};
