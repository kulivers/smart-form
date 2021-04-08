export default () => {
  const fStyle = {
    backgroundColor: "blue",
    display: "inline-block",
    height: "100px",
  };
  const sStyle = {
    height: "100px",
    display: "inline-block",
    backgroundColor: "red",
  };
  const tStyle = {
    height: "100px",
    display: "inline-block",
    backgroundColor: "green",
  };
  const fourStyle = {
    height: "100px",
    // width: "1003px",
    display: "block",
    backgroundColor: "grey",
    alignSelf: "flex-end",
  };
  const containerStyle = {
    margin: "10px 5px 15px 20px",
    width: "100%",
    height: "100vh",
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={fStyle}>first block</div>
      <div style={sStyle}>second block</div>
      <div style={tStyle}>third block</div>
      <div style={fourStyle}>forth block</div>
    </div>
  );
};
