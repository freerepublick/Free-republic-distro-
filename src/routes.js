import Icon from "@mui/material/Icon";

// Page Imports
import Overview from "layouts/overview";
import Catalog from "layouts/catalog";
import Statistics from "layouts/statistics";
import Account from "layouts/account";
import PaymentsRoyalties from "layouts/payments-royalties";
import SubmitTicket from "layouts/submit-ticket";
import SignIn from "layouts/authentication/sign-in";
import SignOut from "layouts/authentication/sign-out";

const routes = [
  {
    type: "collapse",
    name: "Overview",
    key: "overview",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/overview",
    component: <Overview />,
  },
  {
    type: "collapse",
    name: "Catalog",
    key: "catalog",
    icon: <Icon fontSize="small">library_music</Icon>,
    route: "/catalog",
    component: <Catalog />,
  },
  {
    type: "collapse",
    name: "Statistics",
    key: "statistics",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    route: "/statistics",
    component: <Statistics />,
  },
  {
    type: "collapse",
    name: "Account",
    key: "account",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/account",
    component: <Account />,
  },
  {
    type: "collapse",
    name: "Payments & Royalties",
    key: "payments-royalties",
    icon: <Icon fontSize="small">payments</Icon>,
    route: "/payments-royalties",
    component: <PaymentsRoyalties />,
  },
  {
    type: "collapse",
    name: "Submit Ticket",
    key: "submit-ticket",
    icon: <Icon fontSize="small">support_agent</Icon>,
    route: "/submit-ticket",
    component: <SubmitTicket />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-out",
    component: <SignOut />,
  },
];

export default routes;