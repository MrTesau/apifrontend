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

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);

const initialFormData = Object.freeze({
    serviceProvider: "",
    name: "",
    serviceType: "",
    status: "",
    description: "",
    link:"",
});

export default function RegularForms(props) {

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    console.log(e.target.value);
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value //.trim()
    });
  };

  const handleSubmit = (e) => {
   
    // console.log(formData);
    // ... submitted(formData)
    props.submitted(formData)
  };
 
  const classes = useStyles();
  
  return (
        <Card>
          <CardBody>
            <form >
            <CustomInput
                labelText="Service Provider"
                formControlProps={{
                  fullWidth: true
                }}
                // name="serviceProvider"
                // onChange={(event) => handleChange(event)}
                inputProps={{
                  name:"serviceProvider",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
               <CustomInput
                labelText="Name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  name:"name",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
              <CustomInput
                labelText="Service Type"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  name:"serviceType",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
              <CustomInput
                labelText="Status"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  name:"status",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
              <CustomInput
                labelText="Description"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  name:"description",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
              <CustomInput
                labelText="Link"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  name:"link",
                  type: "text",
                  onChange:(event) => handleChange(event)
                }}
              />
              
              <Button color="primary" onClick={handleSubmit}>Submit</Button>
            </form>
          </CardBody>
        </Card>
  );
}

/*
  <CustomInput
                labelText="Name"
                id="name"
                value={name}
                formControlProps={{
                  fullWidth: true
                }}
                onChange={e => setName(e.target.value)}
              />
               <CustomInput
                labelText="Service Type"
                id="serviceType"
                value={serviceType}
                formControlProps={{
                  fullWidth: true
                }}
                onChange={e => setServiceType(e.target.value)}
              />
               <CustomInput
                labelText="Status"
                id="status"
                formControlProps={{
                  fullWidth: true
                }}
                value={status}
                onChange={e => setStatus(e.target.value)}
              />
               <CustomInput
                labelText="Description"
                id="description"
                formControlProps={{
                  fullWidth: true
                }}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
               <CustomInput
                labelText="Link"
                id="link"
                formControlProps={{
                  fullWidth: true
                }}
                value={link}
                onChange={e => setLink(e.target.value)}
              />
*/