import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import styles from "./regularFormsStyle.js";
import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337"
    : "https://travel-log-hazel.vercel.app/api/shorturl/new";

//  shortened link: API_URL/api/shorturl/6

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
    console.log(userFormData.name);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
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
