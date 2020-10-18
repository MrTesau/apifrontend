import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "views/Components/EapTable.js";
import Add from "@material-ui/icons/Add";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Dvr from "@material-ui/icons/Dvr";
import Close from "@material-ui/icons/Close";
import RegularForm from "views/Forms/RegularForms.js";
import EditForm from  "views/Forms/EditForm.js";
import SweetAlert from "react-bootstrap-sweetalert";
// Mock Data
// Prob remove to some other place
// need to Dynamically render datarows

// Req server
// get response
// filter/format response data
// add to datarows
// WILL NEED TO PASS RESOURCE INFO
const dataTable = {
  headerRow: ["Service Provider", "Name", "Service Type", "Status"],
  footerRow: ["Service Provider", "Name", "Service Type", "Status"],
  dataRows: [
    ["EAP Services", "AskEAP", "Confidential Counselling", "Enabled",
    `Three counselling models: in-person, telephone and eCounselling through AskEAP.
    Our 24/7 toll-free phone service is answered by an EAP Services manager or employee 
    - we do not have call centres, call transfers or answer phone`,'www.google.com'],
    ["Test Health", "AskEAP", "Confidential Counselling", "Enabled"],
    ["EAP Services", "AskEAP", "Confidential Counselling", "Enabled"]

  ],
  exDescription: `Three counselling models: in-person, telephone and eCounselling through AskEAP.
                  Our 24/7 toll-free phone service is answered by an EAP Services manager or employee 
                  - we do not have call centres, call transfers or answer phone`
};

// Good place to start attempting a req

// Buttons:
// Add Resource:
// Open form
// Submit form to db
// Req db for updated table

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
};
const useStyles = makeStyles(styles);

export default function ReactTables() {

  const [alert, setAlert] = React.useState(null);
  //    [dataVar FunctionControl] = useState(originalVal)
  const [data, setData] = React.useState(
    // => [{},{}..]
    // RETURNS WHAT A ROW WILL LOOK LIKE
    // pass row data into here access in table
    dataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        serviceProvider: prop[0],
        name: prop[1],
        serviceType: prop[2],
        status: prop[3],
        description: prop[4],
        link: prop[5],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            <Button
              justIcon
              round
              simple
              onClick={(e) => {
                let obj = data.find(o => o.id === key);
                // Kinda retarded way to do this
                // set event to persist (React doesnt save events but uses synthetic ones for perf)
                // set an id to the event 
                // Render SA and render the correct form if edit was pushed
                // Gonna be even worse and pass an object with existing settings
                // CHANGE THIS
                e.persist();
                // e.identify = "edit";
                // Bad
                e.ObjectProps = {
                id: key,
                serviceProvider: prop[0],
                name: prop[1],
                serviceType: prop[2],
                status: prop[3],
                description: prop[4],
                link: prop[5]
                }
                AddResource(e);
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    //find the object copy in newData that is thye same key as this obvjects key
                    // where is this key sent from when clicked
                    // is it sent in the click event...?
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    })
  );
  
  // Function handles Submit from both editForms and regular forms
  // e = formData
  const HandleSubmit = (e) => {
   var newData = data;
   // Edit
   if (e.id !== undefined) {
    newData.forEach((o) => {
      if (o.id == e.id) {
        newData.splice(newData.indexOf(o), 1, {...o, ...e});
    }})
   // Add new
   } else {
     // bad idea to use length
    var key = newData.length;
   // object deconstr..?
   newData.push({
    // id needs to be changed
    id: key,
    serviceProvider: e.serviceProvider,
    name: e.name,
    serviceType: e.serviceType,
    status: e.status,
    description: e.description,
    link:e.link,
    actions: (
      <div className="actions-right">
        <Button
          justIcon
          round
          simple
          onClick={() => {
            let obj = data.find(o => o.id === key);
         // popup
         // form with fields
         // Onsubmit takes obj and sets to new values
         AddResource();
          }}
          color="warning"
          className="edit"
        >
          <Dvr />
        </Button>{" "}
        {/* use this button to remove the data row */}
        <Button
          justIcon
          round
          simple
          onClick={() => {
            var newData = data;
            newData.find((o, i) => {
              if (o.id === key) {
                // here you should add some custom code so you can delete the data
                // from this component and from your server as well
                newData.splice(i, 1);
                return true;
              }
              return false;
            });
            setData([...newData]);
          }}
          color="danger"
          className="remove"
        >
          <Close />
        </Button>{" "}
      </div>
    )})
        }
     // at this point new data is formatted correctly
     // need to pass into setData to set data var
    setData([...newData]);
    hideAlert();
  }

  const AddResource = (e) => {
    console.log(e);
    // style:
    // remove ok button
    // pass funct to child
    // pushes data to datatable 
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" , minWidth: '50em'}}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        showConfirm={false}
      >
       { e.ObjectProps !== undefined ? <EditForm  submitted={HandleSubmit} placeholders={e.ObjectProps}/> : <RegularForm submitted={HandleSubmit} />  } 

      </SweetAlert>
    );
  };
 // clear
 const hideAlert = () => {
  setAlert(null);
};

  const classes = useStyles();
  return (
    <GridContainer>
     {alert}
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>EAP Resources</h4>
          </CardHeader>
          <CardBody>
            <ReactTable

              columns={[
                {
                  Header: "Service Provider",
                  accessor: "serviceProvider",

                },
                {
                  Header: "Name",
                  accessor: "name",

                },
                {
                  Header: "Service Type",
                  accessor: "serviceType",

                },
                {
                  Header: "Status",
                  accessor: "status",
                  width: 55
                },
                {
                  Header: "Actions",
                  accessor: "actions"
                }
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>

        <div >
          <Button
            color="primary"
            size="sm"
            style={{ float: "right" }}
          >
            <Add className={classes.icons} />
Add Resource From File
</Button>{" "}
          <Button
            size="sm"
            color="primary"
            style={{ float: "right" }}
            onClick={function(e){
              AddResource(e);
            }}
          >
            <Add className={classes.icons} />
  Add Resource
  </Button>
        </div>
      </GridItem>
    </GridContainer>
  );
}