import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTableStaff.js";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import AddEmployeeForm from "views/Forms/AddEmployeeForm.js";
import SweetAlert from "react-bootstrap-sweetalert";

// import { dataTable } from "variables/general.js"; Prob Make server Req in component -> organize -> send data like this

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import checkStyles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import Add from "@material-ui/icons/Add";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  ...checkStyles
};
// Mock Employee data
const dataTable = {
  headerRow: ["Employee #", "Name", "Email Address", "Department", "Site", "Sick Days", "Status"],
  footerRow: ["Employee #", "Name", "Email Address", "Department", "Site", "Sick Days", "Status"],
  dataRows: [
    [0, "john smith", "john.smith@email.com", "Finance", "Wellington Central", 0, "Registration Pending"],
    [2, "Bob Jones", "john.smith@email.com", "Finance", " Central", 10, "Registration Pending"],
    [3, "Hoe Jogan", "john.smith@email.com", "Finance", "Wellington Central", 23, "enabled"],
  ]
};






const useStyles = makeStyles(styles);

export default function ReactTables() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false); // control multiple checked
  const [single, SingleSelected] = React.useState(false); //control edit
  const [alert, setAlert] = React.useState(null);

  const handleToggle = (data) => {
    // Allow edit button to display only when one box checked
    // Bad way to do this
    let onlyOne = data.filter(o => o.checked === true).length === 1
    SingleSelected(onlyOne);
    /* 
      Slow Update of State/ Cant figure it out:
      but this would be the preffered toggle handle solution..

      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    */

    // Shitty solution:
    // obj.find to check if any have checked property
    // if true set true ( enable buttons )
    // if false set false ( disable buttons )
    let obj = data.find(o => o.checked == true);
    if (obj != undefined) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  // controls data
  // maps datatable to arr of objects containing tables properties
  const [data, setData] = React.useState(
    dataTable.dataRows.map((prop, key) => {
      return {
        checked: false,
        id: key,
        employeeNum: (
          <div >
            <Checkbox
              key="key"
              style={{ padding: 0, marginRight: 2 }}
              tabIndex={-1}
              onClick={() => {
                let obj = data.find(o => o.id === key);
                obj.checked = !obj.checked;
                console.log(obj);
                handleToggle(data);
                }}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />{"  "}
            {prop[0]}
          </div>
        ),
        name: prop[1],
        email: prop[2],
        department: prop[3],
        site: prop[4],
        sickDays: prop[5],
        status: prop[6],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                  obj.name +
                  ", \nposition: " +
                  obj.position +
                  ", \noffice: " +
                  obj.office +
                  ", \nage: " +
                  obj.age +
                  "\n}."
                );
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
        )
      };
    })
  );

  // function to enable
  const EnableSelected = () => {
    let selected = [...data];
    selected.map(obj => obj.checked ? obj.status = "Enabled": obj.status);
    setData([...selected]);
  };
  // function to Disable
  const DisableSelected = () => {
    let selected = [...data];
    selected.map(obj => obj.checked ? obj.status = "Disabled": obj.status);
    setData([...selected]);
  };
  // ALERT: Add Employee
  const AddEmployee = () => {
    // check if an employee is checked
    // if true pass to form ( will edit employee not add new )
    let toEdit = data.filter(o => o.checked === true)[0];
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" , minWidth: '50em'}}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        showConfirm={false}
      >
        <AddEmployeeForm submitted={HandleSubmit} toEdit={toEdit} />  
      </SweetAlert>
    );
  }; 
  // accepts submitted form data
  // bypass by submitting to server, req for data again?
  const HandleSubmit = (formData) => {
    var newData = data;
    if (formData.id !== undefined) {
      // Create editted obj
      // Not an elegant solution -> obj decon fails for actions
      // IF not declared in an object with scope to other properties
      var n = {
        employeeNum: (
          <div>
            <Checkbox
              key="key"
              style={{ padding: 0, marginRight: 2 }}
              tabIndex={-1}
              onClick={() => {
                let obj = data.find(o => o.id === key);
                obj.checked = !obj.checked;
                handleToggle(data);
               }
              }
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            /> {"  "}
            {formData.employeeNum}
          </div>
        ),
        id: key,
        name: formData.name,
        email:formData.email,
        department: formData.department,
        site: formData.site,
        sickDays: formData.sickDays,
        status: formData.status
       };
     newData.forEach((o) => {
       if (o.id == formData.id) {
         // Replace old with edit
         newData.splice(newData.indexOf(o), 1, {...o, ...n});
     }
    })
    // Add new
    } else {
      // FOR ADDING NEW EMPLOYEE
      // bad idea to use length
     var key = newData.length;
    // object deconstr..?
    var n = {
      employeeNum: (
        <div>
          <Checkbox
            key="key"
            style={{ padding: 0, marginRight: 2 }}
            tabIndex={-1}
            onClick={() => {
              let obj = data.find(o => o.id === key);
              obj.checked = !obj.checked;
              console.log(obj);
              handleToggle(data);
             }
            }
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
          /> {"  "}
          {formData.employeeNum}
        </div>
      ),
      id: key,
      name: formData.name,
      email:formData.email,
      department: formData.department,
      site: formData.site,
      sickDays: formData.sickDays,
      status: formData.status
     };
     // This will cause issues down the line
     newData.push({
      ...newData[0],
      ...n})
    }
   setData([...newData]);
   hideAlert();
  }
  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <GridContainer>
      {alert}
      <GridItem xs={12}>
        <Card>
          <CardBody>
            <Card style={{ marginBottom: "0px", padding: "5px" }}>
              <CardHeader color="primary" icon>
                <CardIcon color="primary">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Employees</h4>
              </CardHeader>
              <ReactTable
                columns={[
                  {
                    Header: "Employee #",
                    accessor: "employeeNum"
                  },
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Email",
                    accessor: "email"
                  },
                  {
                    Header: "Department",
                    accessor: "department"
                  },
                  {
                    Header: "Site",
                    accessor: "site"
                  },
                  {
                    Header: "Sick Days",
                    accessor: "sickDays"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  },
                  /*
                  {
                    Header: "Actions",
                    accessor: "actions"
                  }
                  */
                ]}
                data={data}
              />
            </Card>

            <div style={{ float: "right", marginTop: "0px" }}>
              <Button
                color="primary"
                size="sm"
                style={{ float: "right" }}
              >
                <Add className={classes.icons} />
                 Add Employee From File
              </Button>{" "}
              <Button
                onClick={() => AddEmployee()}
                size="sm"
                color="primary"
                style={{ float: "right" }}
              >
               <Add className={classes.icons} />
                Add Employee
                </Button>
              {
                checked ?
                  <Button
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={() => DisableSelected()}
                  >
                  <Add className={classes.icons} />
                   Disable Employee(s)
                 </Button>
                  :
                  <Button
                    disabled
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                  >
                    <Add className={classes.icons} />
                     Disable Employee(s)
                   </Button>

                   }
                   {
                checked ?
                  <Button
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={()=> EnableSelected()}
                  >
                    <Add className={classes.icons} />
  Enable Employee(s)
  </Button>
                  :
                  <Button
                    disabled
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                  >
                    <Add className={classes.icons} />
  Enable Employee(s)
  </Button>

              }
              {
                 single ?
                  <Button
                    onClick = {() => AddEmployee() }
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                  >
                    <Add className={classes.icons} />
  Edit Employee
  </Button>
                  :
                  <Button
                    disabled
                    size="sm"
                    color="primary"
                    style={{ float: "right" }}
                  >
                    <Add className={classes.icons} />
  Edit Employee
  </Button>
              }
            </div>



          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
