import { useState } from "react";

const CloudinaryFileUploader = () => {
  const baseUrl = "https://api.cloudinary.com/v1_1/kulivevrs/image/upload";
  const uploadPreset = "smartForm";

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const handleUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", uploadPreset);
    setLoading(true);
    const res = await fetch(baseUrl, { method: "POST", body: data });
    const file = await res.json();
    console.log(file);
    setLoading(false);
    setImage(file.secure_url); //string
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        placeholder="upload image"
        onChange={handleUpload}
      />
      <br />
      {loading ? <p>Loading = true</p> : <p>Loading = false</p>}
      <img src={image} style={{ width: "300px" }} />
    </div>
  );
};

export default CloudinaryFileUploader;
