import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "./regularFormsStyle.js";
import axios from "axios";
const API_URL = "https://url-shortener-black.vercel.app";

const useStyles = makeStyles(styles);
export default function RegularForms() {
  // Form data for creating a new User
  const [userFormData, updateUserFormData] = React.useState({
    name: "",
  });
  const [newUrl, setNewUrl] = React.useState("");
  const handleChange = (e) => {
    updateUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/shorturl/new`, {
        url: userFormData.name,
      })
      .then(function showUserInfo(res) {
        if (res.data.short_url) {
          console.log(res.data.short_url);
          let newUrl = `${API_URL}/api/shorturl/${res.data.short_url}`;
          setNewUrl(newUrl);
        } else {
          setNewUrl("error...Check URL syntax!");
        }
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.urlWrapper}>
      A node built Url Shortener. Enter a URL and a new one will be generated!
      <CustomInput
        labelText="Enter a valid URl"
        id="name"
        formControlProps={{
          fullWidth: false,
        }}
        inputProps={{
          name: "name",
          type: "text",
          onChange: (event) => handleChange(event),
        }}
      />
      <Button
        round
        size="sm"
        onClick={(e) => {
          submitUser(e);
        }}
        color="rose"
      >
        Shorten URL
      </Button>
      <br />
      {newUrl === "error...Check URL syntax!" ? (
        `${newUrl}`
      ) : newUrl !== "" ? (
        <>
          {" "}
          your new url is: {newUrl}
          <Button round size="sm" color="rose">
            <a
              href={newUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Go There!
            </a>
          </Button>
        </>
      ) : (
        "Add a URl to be shortened"
      )}
    </div>
  );
}
