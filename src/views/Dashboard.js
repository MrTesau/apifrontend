import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import FileUpload from "./ImageUpload.js";
import ExerciseTracker from "./exerciseTracker.js";
import UrlShortener from "./urlShortener.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import "./customCss.css";
const styles = {
  cardTitle,
  cardCategory: {
    margin: "0",
    color: "#999999",
  },
  typo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: "1rem",
  },
  card: {
    background: "#f9ffea",
  },
};

const useStyles = makeStyles(styles);
export default function Panels() {
  const classes = useStyles();
  return (
    <div className="page-wrapper">
      <Grid container justify="center" alignItems="center">
        <GridItem xs={11} md={10}>
          <Card className={classes.card}>
            <CardHeader color="success" contact>
              <div className={classes.typo}>
                Personal Projects: APIs and Microservices
              </div>
            </CardHeader>
            <NavPills
              alignCenter={true}
              color="success"
              tabs={[
                {
                  tabButton: "Exercise Tracker",
                  tabContent: (
                    <div>
                      <ExerciseTracker />
                    </div>
                  ),
                },
                {
                  tabButton: "File MetaData",
                  tabContent: (
                    <div>
                      <FileUpload />
                    </div>
                  ),
                },

                {
                  tabButton: "Url Shortener",
                  tabContent: <UrlShortener />,
                },
                {
                  tabButton: "Timestamp Microservice and Header Parser",
                  tabContent: (
                    <div className="center-flex-column">
                      <p>
                        Woops! Nothing here. Timestamps Front End coming soon!
                        In the meanwhile if your curious check them out on
                        Repl.it.
                      </p>
                      <br />
                      <a
                        href="https://repl.it/@MrTesau/FCC-Project-TimestampApi"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        &nbsp;Timestamp Microservice
                      </a>{" "}
                      <br />
                      <a
                        href="https://repl.it/@MrTesau/boilerplate-project-headerparser"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        &nbsp;Header parser Microservice
                      </a>{" "}
                    </div>
                  ),
                },
              ]}
            />
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}
