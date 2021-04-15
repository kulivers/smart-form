import React, { Component, useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

const UploadingProgressFile = (props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    async function upload() {
      const url = await uploadFile(props.file, setProgress);
      // this.setState({ url: url });
      console.log(url);
    }
    upload();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "raw",
          maxWidth: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {props.file.name}
        <Button variant="contained" size="small">
          Delete
        </Button>
      </div>
      <div style={{ width: "100%", marginTop: "5px", marginBottom: "15px" }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={100} />
      </div>
    </div>
  );
};

const uploadFile = (file, onProgress) => {
  const baseUrl = "https://api.cloudinary.com/v1_1/kulivevrs/image/upload";
  const uploadPreset = "smartForm";

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", baseUrl); // request to url

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText); //XMLHttpRequest.onload = callback; when the request completes successfully
      res(resp.secure_url); // return secure url
    };
    xhr.onerror = (evt) => rej(evt); //reject event

    xhr.upload.onprogress = (event) => {
      //specify upload action
      if (event.lengthComputable) {
        //lengthComputable - flag that length can be computable
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage)); //callback function from args
      }
    };

    const formData = new FormData();
    formData.append("file", file); //send cloudinary file
    formData.append("upload_preset", uploadPreset);

    xhr.send(formData);
    //Sends the request. If the request is async (which is the default), this method returns as soon as the request is sent.
  });
};
export default UploadingProgressFile;
