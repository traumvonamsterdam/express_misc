import React from "react";
import axios from "axios";

const FileForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const file1 = document.getElementById("file-field1").files[0];
    const file2 = document.getElementById("file-field2").files[1];
    const url = "http://localhost:3000/uploads3";
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    const data = new FormData();
    data.append("meme", file1);
    data.append("meme", file2);

    // for (let pair of data.entries()) {
    //   console.log(pair[0]);
    //   console.log(pair[1]);
    // }
    axios.post(url, data, config);
    // .then(response => {
    //   console.log(response.data);
    // });
  };

  return (
    <div>
      <h1>Sanity Check</h1>
      <form onSubmit={handleSubmit}>
        <input id="file-field1" type="file" name="meme" />
        <input id="file-field2" type="file" name="meme" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FileForm;
