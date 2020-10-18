/*eslint-disable*/
import React from "react";
import {
  useTable,
  useFilters,
  useAsyncDebounce,
  useSortBy, 
  usePagination,
  useGlobalFilter
} from "react-table";
import classnames from "classnames";
// A great library for fuzzy filtering/sorting items
import matchSorter from "match-sorter";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";

import Collapse from '@material-ui/core/Collapse';
import { Container } from "@material-ui/core";

// ROW COMPONENT IMPORTS //
import Crow from "components/ReactTable/Crow.js";
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import TableRegular from "components/Table/Table.js";
import Dvr from "@material-ui/icons/Dvr";
import Close from "@material-ui/icons/Close";
import PriorityHigh from "@material-ui/icons/PriorityHigh";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

import Build from "@material-ui/icons/Build";

import Delete from "@material-ui/icons/Delete";


import Button from "components/CustomButtons/Button.js";
const newStyles = {
  ...styles,
  formControlMargins: {
    margin: "3px 0 !important"
  },
  gridContainer: {
    justifyContent: "center"
  }
};


const useStyles = makeStyles(newStyles);

// Define a default UI for filtering
// This defines Global Filter (Column filter removed)
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length

  return (

    <CustomInput
      formControlProps={{
        fullWidth: true
      }}

      inputProps={{
        value: globalFilter || "",
        onChange: e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        },
        placeholder: `Filter`
      }}
    />

    
  );
}


function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;

// Our table component //////////////////////////////////////////////////////
function Table({ columns, data }) {

  const [numberOfRows, setNumberOfRows] = React.useState(10);
  const [pageSelect, handlePageSelect] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {

        return rows.filter(row => {
        
        const rowValue = row.values[id]; 

          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase()) 
            : true;
            
        });
      }
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    visibleColumns,
    nextPage,
    pageOptions,
    pageCount,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageSize: 10, pageIndex: 0 }
    },
    useFilters,      // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination
  );



  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  // const firstPageRows = rows.slice(0, 10);
  let pageSelectData = Array.apply(null, Array(pageOptions.length)).map(
    function() {}
  );
  let numberOfRowsData = [5, 10, 20, 25, 50, 100];

  return (
    <>
      <div className="ReactTable -striped -highlight">
        <div className="pagination-top">
          <div className="-pagination">
          </div>
        </div>
         {/*
          Table start
          - Render Global Filter Component
           */}

         <Container>
         <GridItem xs={12}>
         <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
          </GridItem>
        </Container>

        <table {...getTableProps()} className="rt-table">
        
        <thead className="rt-thead -header">

          
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                {headerGroup.headers.map((column, key) => (
                  
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={classnames("rt-th rt-resizable-header", {
                      "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                      "-sort-asc": column.isSorted && !column.isSortedDesc,
                      "-sort-desc": column.isSorted && column.isSortedDesc
                    })}
                  >
                    <div className="rt-resizable-header-content" style={{width: column.Header == 'Status' ? 50: 150  }}>
                      {console.log(column)}
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}

          </thead>

          <tbody {...getTableBodyProps()} className="rt-tbody">
           
            {page.map((row, i) => {
              console.log(page);
              console.log(row);
              prepareRow(row);
              // ROW
              return (  
                <React.Fragment>
                  {console.log(row)} 
                <tr
                  
                  {...row.getRowProps()}
                  className={classnames(
                    "rt-tr",
                    { " -odd": i % 2 === 0 },
                    { " -even": i % 2 === 1 }
                  )}
                >
         
           

                  {row.cells.map(cell => {
                    console.log(cell);
                    // CELLS OF EACH ROW
                    return (
                     
                      <td onClick={() => setOpen(!open)} {...cell.getCellProps()} className="rt-td">
                       
                        {cell.render("Cell")}
                      
                      </td>
                      
                    );
                  })}
                  </tr>

{/* COLLAPSABLE COMPONENT NEEDS WORK */}
<TableRow>    
 <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Card>
<pre>                
<strong>Service Provider:</strong> EAPServices
</pre>
<pre>
<strong>Name:</strong>             AskEAP
</pre>
<pre>
Service Type:     Confidential Counselling

</pre>
<div className="actions-right">
<Button 
 color="danger"  
 size="sm"  
 className={classes.marginRight}>
<Delete className={classes.icons} /> Delete Resource             
</Button>{" "}
<Button 
size="sm" 
color="primary" 
className={classes.marginRight}>
  <Build className={classes.icons} /> 
  Edit Resource
  </Button>{" "}
          </div>
             </Card>
            </Box>
          </Collapse>
      </TableRow>
    </React.Fragment>

          
                    
              );


            })}

          </tbody>
        </table>



  {/* LOWER DISPLAY PAGE NEXT/ PREVIOUS BAR NEEDS STYLING */}
        <div className="pagination-bottom">
        <div className="-pagination">
            
            <div className="-center">
            <GridContainer className={classes.gridContainer}>
             <div className="-previous">
              <button
                type="button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="-btn"
              >
                Previous
              </button>
             </div>

                <GridItem xs={12} sm={6} md={4}>

                <FormControl
                    fullWidth
                    className={
                      classes.selectFormControl +
                      " " +
                      classes.formControlMargins
                    }
                  >
                    {/*RENDER COMPONENT FOR PAGE SELECT */}
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={pageSelect}
                      onChange={event => {
                        gotoPage(event.target.value);
                        handlePageSelect(event.target.value);
                      }}
                      inputProps={{
                        name: "pageSelect",
                        id: "page-select"
                      }}
                    >
                      {pageSelectData.map((prop, key) => {
                        return (
                          <MenuItem
                            key={key}
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value={key}
                          >
                            Page {key + 1}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
              </GridItem>
               {/*RENDER COMPONENT FOR ROW SELECT */}
               <GridItem xs={12} sm={6} md={4}>
                  <FormControl
                    fullWidth
                    className={
                      classes.selectFormControl +
                      " " +
                      classes.formControlMargins
                    }
                  >
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={numberOfRows}
                      onChange={event => {
                        setPageSize(event.target.value);
                        setNumberOfRows(event.target.value);
                      }}
                      inputProps={{
                        name: "numberOfRows",
                        id: "number-of-rows"
                      }}
                    >
                      {numberOfRowsData.map(prop => {
                        return (
                          <MenuItem
                            key={prop}
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value={prop}
                          >
                            {prop} rows
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  </GridItem>
                  <div className="-next">
              <button
                type="button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="-btn"
              >
                Next
              </button>
            </div> 
       
            </GridContainer>
            </div>
            
            </div>

        </div>
      </div>
    </>
  );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== "number";

export default Table;
