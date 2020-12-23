import {
  cardTitle,
  successColor,
  dangerColor,
} from "assets/jss/material-dashboard-pro-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const regularFormsStyle = {
  ...customCheckboxRadioSwitch,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  staticFormGroup: {
    marginLeft: "0",
    marginRight: "0",
    paddingBottom: "10px",
    margin: "8px 0 0 0",
    position: "relative",
    "&:before,&:after": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
  staticFormControl: {
    marginBottom: "0",
    paddingTop: "8px",
    paddingBottom: "8px",
    minHeight: "34px",
  },
  inputAdornment: {
    marginRight: "8px",
    position: "relative",
  },
  inputAdornmentIconSuccess: {
    color: successColor[0] + "!important",
  },
  inputAdornmentIconError: {
    color: dangerColor[0] + "!important",
  },
  wrapperDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
  },
  introDiv: {
    display: "flex",
    flexDirection: "column",
  },
  getLogs: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default regularFormsStyle;
