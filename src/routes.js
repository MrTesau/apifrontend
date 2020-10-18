// Cleared views/components, may break

// Components
import Dashboard from "views/Dashboard.js";
import ErrorPage from "views/ErrorPage.js";
import ManagersResources from "views/ManagersResources.js";
import LoginPage from "views/Pages/LoginPage.js";
import EapResources from "views/EapResources.js";
import Snapshots from "views/snapshots.js";
import EmployeesDb from "views/EmployeesDb.js";


// @material-ui/icons

import DashboardIcon from "@material-ui/icons/Dashboard";
import Assignment from "@material-ui/icons/Assignment";
import Settings from "@material-ui/icons/Settings";
import Person from "@material-ui/icons/Person";
import Timeline from "@material-ui/icons/Timeline";


var dashRoutes = [

  // DASH
  // Note component to Render listed here (edit dashboard)
  {
    path: "/dashboard",
    name: "Managers Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },

  // PAGE DATA FOR ROUTES
  // RENDER IN ADMIN AND AUTH
  {
    path: "/snapshots",
    name: "Snapshots",
    icon: Assignment,
    component: Snapshots,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Resources",
    icon: Timeline,
    state: "tablesCollapse",
    views: [

      {
        path: "/resources/eap-resources",
        name: "EAP Resources",
        mini: "ER",
        component: EapResources,
        layout: "/admin"
      },
      {
        path: "/resources/managers-resources",
        name: "Managers Resources",
        mini: "MR",
        component: ManagersResources,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Databases",
    icon: Person,
    state: "mapsCollapse",
    views: [
      {
        path: "/employees",
        name: "Staff",
        mini: "S",
        component: EmployeesDb,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Metrics",
        mini: "M",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  },

  {
    collapse: true,
    name: "Settings",
    icon: Settings,
    state: "formsCollapse",
    views: [
      {
        path: "/user-page",
        name: "My Account",
        mini: "UP",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Technical Support",
        mini: "TS",
        component: ErrorPage,
        layout: "/auth"
      },
      {
        path: "/login-page",
        name: "Log Out",
        mini: "LO",
        component: LoginPage,
        layout: "/auth"
      }
    ]
  }
];
export default dashRoutes;