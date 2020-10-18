// AUTH ROUTER

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";

// import BG image
import login from "assets/img/boardroom.png";

// import LOGIN COMPONENT
// NOT A GOOD IDEA TO STORE HERE BUTT TEMP 
import LoginPage from "views/Pages/LoginPage.js";



const useStyles = makeStyles(styles);

// component start
export default function Pages(props) {


  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  
  // function to handle what route to render
  // Gonna attempted to always render loginpage
  // key value is problematic
  var logRoute =  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth"
  }

// Function to render /auth routes
// checks layout
// renders component if layout == auth 

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  // set bg image to what path you are on 
  const getBgImage = login;

  // RETURNED JSX:
  return (
    <div>
      <AuthNavbar brandText={"HeadsUp NZ"} {...rest} />
      
      <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPage}
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(" + getBgImage + ")" ,
          backgroundSize: "cover", 
          backgroundPosition: "top center" }}
        >

          <Switch>
            {/* call Route handler function to choose what to render */}
            {getRoutes(routes)}
            <Redirect from="/auth" to="/auth/login-page" />
          </Switch>

          <Footer white />

        </div> 
      </div>
    </div>
  );
}
