import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "./regularFormsStyle.js";
import axios from "axios";
import Hidden from "@material-ui/core/Hidden";
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337"
    : "https://travel-log-hazel.vercel.app"; // CHANGE WHEN HOSTING

const useStyles = makeStyles(styles);
export default function RegularForms() {
  const [exerciseFormData, setExerciseFormData] = React.useState({
    userId: "",
    description: "",
    duration: "",
    date: "",
  });
  const [successNewExercise, setSuccessNewExercise] = React.useState("");
  // Form data for creating a new User
  const [userFormData, updateUserFormData] = React.useState({
    name: "",
  });
  // Variables for displaying new User Data
  const [newUserName, setNewUserName] = React.useState("");
  const [newUserId, setNewUserId] = React.useState("");
  // Get logs
  const [getLogsById, setGetLogsById] = React.useState({
    id: "",
  });
  const [logsFound, setLogsFound] = React.useState([]);

  const handleChange = (e) => {
    updateUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleExerciseChange = (e) => {
    setExerciseFormData({
      ...exerciseFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeGetLogs = (e) => {
    setGetLogsById({
      ...getLogsById,
      [e.target.name]: e.target.value,
    });
  };
  // Get all Logs
  // Add between dates and number to return  GET /api/exercise/log?userId=1234&from=2018-01-01&to=2018-07-23&limit=100
  const getLogs = (e) => {
    e.preventDefault();
    axios
      .get(`${API_URL}/api/exercise/log?userId=${getLogsById.id}`)
      .then(function showUserInfo(res) {
        console.log(res);
        setLogsFound(res.data.log); //{activity: "TestSession"  date: "2020-11-05T00:00:00.000Z";   duration: 20;}
      });
  };
  // Submit a new user
  const submitUser = (e) => {
    // Wipe any previous data
    setNewUserName("");
    setNewUserId("");
    e.preventDefault();
    axios
      .post(`${API_URL}/api/exercise/new-user`, { username: userFormData.name })
      .then(function showUserInfo(res) {
        setNewUserName(res.data.username);
        setNewUserId(res.data._id);

        updateUserFormData({
          name: "",
        });
      });
  };
  // Submit Exercise to logs
  const submitExercise = (e) => {
    setSuccessNewExercise("");
    // Wipe any previous data
    //setNewUserName("");
    // setNewUserId("");
    e.preventDefault();
    axios
      .post(`${API_URL}/api/exercise/add`, {
        userId: exerciseFormData.userId,
        description: exerciseFormData.description,
        duration: exerciseFormData.duration,
        date: exerciseFormData.date,
      })
      .then(function showUserInfo(res) {
        console.log(res);
        setSuccessNewExercise({
          username: res.data.username,
          date: res.data.date,
        });
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapperDiv}>
      <Hidden xsDown>
        <div className={classes.introDiv}>
          <p>
            An exercise tracker which allows creation of a user and exercise
            logs. Functionality: Create a new User, Add exercises to be saved in
            a user's logs, Retrieve a users logs.
          </p>
          <p>
            A simple create, read and update Node.js/Express server and
            MongoDB/Mongoose database.
          </p>
        </div>
      </Hidden>
      <div className={classes.formWrapper}>
        <div className={classes.formContent}>
          <CustomInput
            labelText="new user"
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
        </div>
        <Hidden smUp>
          <br />
        </Hidden>
        <Button
          round
          size="sm"
          onClick={(e) => {
            submitUser(e);
          }}
          color="primary"
        >
          Create User
        </Button>
        <br />
        <p>
          {newUserName ? (
            <ul>
              <li>Your user name: {`${newUserName}`}</li>
              <li>Your unique ID: {`${newUserId}`}</li>
              <li>Save these for adding log entries!</li>
            </ul>
          ) : (
            "First time here? Create a new user to get your unique ID and start logging your exercises! "
          )}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CustomInput
            labelText="UserID"
            id="id"
            formControlProps={{
              fullWidth: false,
            }}
            inputProps={{
              name: "userId",
              type: "text",
              onChange: (event) => handleExerciseChange(event),
            }}
          />
          <CustomInput
            labelText="Description"
            id="description"
            formControlProps={{
              fullWidth: false,
            }}
            inputProps={{
              name: "description",
              type: "text",
              onChange: (event) => handleExerciseChange(event),
            }}
          />
          <CustomInput
            labelText="duration* (mins.)"
            id="duration"
            formControlProps={{
              fullWidth: false,
            }}
            inputProps={{
              name: "duration",
              type: "text",
              onChange: (event) => handleExerciseChange(event),
            }}
          />
          <CustomInput
            labelText="date: (yyyy-mm-dd)"
            id="date"
            formControlProps={{
              fullWidth: false,
            }}
            inputProps={{
              name: "date",
              type: "text",
              onChange: (event) => handleExerciseChange(event),
            }}
          />
        </div>
        <Hidden smUp>
          <br />
        </Hidden>
        <Button
          round
          size="sm"
          color="primary"
          onClick={(e) => submitExercise(e)}
        >
          Create Entry
        </Button>
        <br />
        <div>
          {successNewExercise ? (
            <>
              <p>
                {`New exercise for ${successNewExercise.username} added on ${successNewExercise.date}`}
                !
              </p>
            </>
          ) : (
            <>
              <p>Submit the above form to add a new exercise to your log!</p>
            </>
          )}
        </div>
      </div>

      <div className={classes.getLogs}>
        <CustomInput
          labelText="Enter your unique ID"
          id="name"
          formControlProps={{
            fullWidth: false,
          }}
          inputProps={{
            name: "id",
            type: "text",
            onChange: (event) => handleChangeGetLogs(event),
          }}
        />
      </div>
      <Hidden smUp>
        <br />
      </Hidden>
      {logsFound.length === 0 ? (
        <Button round size="sm" color="primary" onClick={(e) => getLogs(e)}>
          Get logs
        </Button>
      ) : (
        <Button
          round
          size="sm"
          color="primary"
          onClick={() => setLogsFound([])}
        >
          reset
        </Button>
      )}
      <div>
        {logsFound.map((log) => (
          <ul>
            <li>{log.activity}</li>
            <li>{log.date}</li>
            <li>{log.duration}</li>
          </ul>
        ))}
      </div>
      <br />
    </div>
  );
}
