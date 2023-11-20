import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";

//AuthenticationInner pages

import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";


//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

// Users
import AllUsers from "../pages/Users/AllUsers";
import CreateuUser from "../pages/Users/CreateUser";
import EditUser from "../pages/Users/editUser";
// import showUser from "../pages/Users/showUser";

// Quotes
import AllQuotes from "../pages/Quotes/AllQuotes";
import CreateQuotes from "../pages/Quotes/CreateQuotes";
import EditQuotes from "../pages/Quotes/editQuotes";
// import showUser from "../pages/Users/showUser";

// Quotes
import AllLessees from "../pages/Lessees/AllLessees";
// import CreateQuotes from "../pages/Quotes/CreateQuotes";
// import EditQuotes from "../pages/Quotes/editQuotes";
// import showUser from "../pages/Users/showUser";


// Partner Admins
import AllPartnerAdmins from "../pages/ParnterAdmin/AllPartnerAdmins";
// import CreateQuotes from "../pages/Quotes/CreateQuotes";
// import EditQuotes from "../pages/Quotes/editQuotes";
// import showUser from "../pages/Users/showUser";


// Partner Users
import AllPartnerUsers from "../pages/partnerUser/AllPartnerUsers";
// import CreateQuotes from "../pages/Quotes/CreateQuotes";
// import EditQuotes from "../pages/Quotes/editQuotes";
// import showUser from "../pages/Users/showUser";

// Customers
import AllCustomers from "../pages/Customers/AllCustomers";
// import CreateQuotes from "../pages/Quotes/CreateQuotes";
// import EditQuotes from "../pages/Quotes/editQuotes";
// import showUser from "../pages/Users/showUser";


const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

    //Users
    { path: "/allusers", component: <AllUsers /> },
    { path: "/createuser", component: <CreateuUser /> },
    { path: "/edituser", component: <EditUser/> },
    // { path: "/viewuser", component: <showUser/> },

    //Quotes
    { path: "/allquotes", component: <AllQuotes /> },
    { path: "/createquote", component: <CreateQuotes /> },
    { path: "/editquotes", component: <EditQuotes/> },
    // { path: "/viewuser", component: <showUser/> },

    //lessees
    { path: "/allLessees", component: <AllLessees /> },
    // { path: "/createquotes", component: <CreateQuotes /> },
    // { path: "/editquotes", component: <EditQuotes/> },
    // { path: "/viewuser", component: <showUser/> },

    //partner admin
    { path: "/allpartneradmins", component: <AllPartnerAdmins /> },
    // { path: "/createquotes", component: <CreateQuotes /> },
    // { path: "/editquotes", component: <EditQuotes/> },
    // { path: "/viewuser", component: <showUser/> },
    
    //partner user
    { path: "/allpartnerusers", component: <AllPartnerUsers /> },
    // { path: "/createquotes", component: <CreateQuotes /> },
    // { path: "/editquotes", component: <EditQuotes/> },
    // { path: "/viewuser", component: <showUser/> },  


    // Customers
    { path: "/allcustomer", component: <AllCustomers /> },
    // { path: "/createquotes", component: <CreateQuotes /> },
    // { path: "/editquotes", component: <EditQuotes/> },
    // { path: "/viewuser", component: <showUser/> },  
    

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes : any= [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages

  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },

  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };