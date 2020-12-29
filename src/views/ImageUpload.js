import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
// core components
import Button from "components/CustomButtons/Button.js";
import axios from "axios";
const API_URL = "https://flamboyant-elion-7adf74.netlify.app";
/*
  window.location.hostname === "localhost"
    ? "http://localhost:1337"
    : "https://travel-log-hazel.vercel.app";
*/
/*
   <form enctype="multipart/form-data" method="POST" action="/api/fileanalyse">
            <input id="inputfield" type="file" name="upfile">
            <input id="button" type="submit" value="Upload">
          </form>
*/
export default function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [dataDisplay, setDataDisplay] = React.useState("");

  let fileInput = React.createRef();

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
    const data = new FormData();
    data.append("data", file);
    //console.log(data);

    axios.post(`${API_URL}/.netlify/functions/api`, data).then((res) => {
      // then print response status
      console.log(res);
      setDataDisplay({ ...res.data });
      console.log(dataDisplay);
    });
  };
  const handleClick = () => {
    fileInput.current.click();
    //handleSubmit(); // Call submit to server
  };
  const handleRemove = () => {
    setFile(null);
    setDataDisplay("");
    fileInput.current.value = null;
  };

  let { addButtonProps, changeButtonProps, removeButtonProps } = props;
  return (
    <div className="fileinput text-center file-input-wrapper">
      <p>
        Submit a file and you receive it's file metadata name, type, and size in
        bytes within the JSON response. Built with Node.js, Express and multer
        for file reading.
      </p>
      <input
        type="file"
        name="upfile"
        onChange={handleImageChange}
        ref={fileInput}
      />
      <div>
        {file === null ? (
          <div>
            <Button
              color="primary"
              {...addButtonProps}
              onClick={() => handleClick()}
            >
              {"Select File"}
            </Button>
          </div>
        ) : (
          <span>
            <Button
              color="primary"
              {...changeButtonProps}
              onClick={(e) => {
                // handleClick()
                // Call submit here
                handleSubmit(e);
              }}
            >
              Get Data
            </Button>

            <Button
              color="danger"
              {...removeButtonProps}
              onClick={() => handleRemove()}
            >
              <i className="fas fa-times" /> Remove
            </Button>
          </span>
        )}

        <br />
        {dataDisplay ? (
          <div>
            <strong>Your file data</strong>
            <br />
            Name: {`${dataDisplay.name}`}
            <br />
            Type: {`${dataDisplay.type}`}
            <br />
            size: {`${dataDisplay.size / 1000}KB`}
          </div>
        ) : (
          " Upload a file to see its metadata"
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object,
};
