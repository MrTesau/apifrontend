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

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import ExStyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

// const styles = {...regStyles, ...ExStyles }
const useStyles = makeStyles(styles);

const initialFormData = Object.freeze({
  
  //id: "",
  serviceProvider: "",
  name: "",
  serviceType: "",
  status: "",
  description: "",
  link: "",

});

export default function RegularForms(props) {
  // accepts submit function and placeholder as props
  // sets formData to initialFormData obj + Object containing id (to id and edit in handlesubmit)
  // sets placeholder values in each input via props.placeholders
  // onChange runs upDateFormData to add inputName: inputValue for each field
  // On submit runs props.Submitted(Component passed from EapResources)
  // Poorly handled form NEEDS FURTHER WORK.

  const [formData, updateFormData] = React.useState({...initialFormData, ...{ id: props.placeholders.id } });
  /* const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  */
  const handleChange = (e) => {
    // upDateFormData may specifically need:
    // a target input name
    // a target input value
    // As adding id was problamatic without using a CustomInput
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value //.trim()
    });
  };

  const handleSubmit = (e) => {
   console.log(formData)
   // Replace with write to server/db
   // Req server somewhere for new Data once added 
   props.submitted(formData)

  };

  const classes = useStyles();

  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Service Provider
      </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={10}>
          <CustomInput
            id="help-text"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"serviceProvider",
              type: "text",
              placeholder: props.placeholders.serviceProvider,
              onChange:(event) => handleChange(event)
            }}
            helpText="A block of help text that breaks onto a new line."
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Name
      </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={10}>
          <CustomInput
            id="help-text"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"name",
              type: "text",
              placeholder: props.placeholders.name,
              onChange:(event) => handleChange(event)
            }}
            helpText="A block of help text that breaks onto a new line."
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Service Type
      </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={10}>

          <CustomInput
            id="placeholder"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"serviceType",
              placeholder: props.placeholders.serviceType,
              onChange:(event) => handleChange(event)
            }}
          />

        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Status
      </FormLabel>
        </GridItem>
      {/* Budget solution as SA displays Dropdown menu on page not in Alert Box */}
      {/* So commented code below this displays box as hidden. Will figure out later */}
        <GridItem xs={12} sm={10}>
        <CustomInput
            id="placeholder"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"status",
              placeholder: props.placeholders.status,
              onClick:(event) => {
                // Fucken messy
                // Too Bad fix later
              var currentStatus = props.placeholders.status;
              if (currentStatus === "Enabled") {
                 props.placeholders.status = "Disabled";
                 event.target.value = "Disabled";
                 handleChange(event);
              } else {
                props.placeholders.status = "Enabled";
                event.target.value = "Enabled";
                handleChange(event);
              }
            }
            }}
          />
        </GridItem>
      </GridContainer>
{/*
  <GridItem xs={12} sm={10}>
        <FormControl
                        fullWidth
                        className={classes.staticFormControl} >
          <Select
            MenuProps={{
              className: classes.selectMenu
             
            }}
            classes={{
              select: classes.select
            }}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select",
              placeholder: props.placeholders.status
            }}
            className={classes.staticFormControl}
          >
             <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Choose City
                        </InputLabel>
            <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="3"
                          >
                            Bucharest
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="4"
                          >
                            Rome
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="5"
                          >
                            New York
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="6"
                          >
                            Miami
                          </MenuItem>
          </Select>
          </FormControl>
  
        </GridItem>
                          </GridContainer> */}
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Description
      </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={10}>
          <CustomInput
            id="help-text"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"description",
              type: "text",
              placeholder: props.placeholders.description,
              onChange:(event) => handleChange(event)
            }}
            helpText="A block of help text that breaks onto a new line."
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Link/URL
      </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={10}>
          <CustomInput
            id="help-text"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name:"link",
              type: "text",
              placeholder: props.placeholders.link,
              onChange:(event) => handleChange(event)
            }}
            helpText="A block of help text that breaks onto a new line."
          />
        </GridItem>
      </GridContainer>
      <Button color="primary" onClick={handleSubmit} >Submit</Button>
    </form>
  );
}

