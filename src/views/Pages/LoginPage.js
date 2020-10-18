import React from "react";
import axios from 'axios'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage() {

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  // Attempting to add authentication using UseState
  // Examples have used class based components
  const [email, submitEmail] = React.useState("");
  const [password, submitPassword] = React.useState("");


  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  // Have added:
  // onChange to form fields
  // submitEmail(emailValue)
  // submitPassWord(passwordValue)

  //onSubmit will be prob submit to server authentication
  const onSubmit = (e) => {
   e.preventDefault();
   axios.post("http://localhost:3000/api/auth/login-employer",{ email: email,
   password: password}).then(function populateStorage(res) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('name', res.data.name);
    localStorage.setItem('id', res.data.id);
    localStorage.setItem('expiration', res.data.expiresIn);
    
  });
  }


  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6} lg={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="primary" 
              >
                <h4 className={classes.cardTitle}>Employer Log in</h4>
              </CardHeader>

              <CardBody>
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    onChange:(event) => {
                      submitEmail(event.target.value)
                      
                    }
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onChange:(event) => {
                      submitPassword(event.target.value)
                      
                    }
                  }}
                />
              </CardBody>

              <Button color="transparent" variant="contained">
                  Forgot your password?
              </Button>

              <CardFooter className={classes.justifyContentCenter}>

                <Button variant="contained" color="linkedin" size="md" onClick={function(e) { 
                  onSubmit(e);
                  }}>
                  Login
                </Button>

              </CardFooter>
            </Card>
          </form>

        </GridItem>

      </GridContainer>
    </div>
  );
}
