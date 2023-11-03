import {
    createBrowserRouter,
} from "react-router-dom";
import Metrics from "../pages/Metrics";
import Home from "../pages/Home";
import Actions from "../pages/Actions";
import About from "../pages/About";
import LogIn from "../pages/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Notifications from "../pages/Notifications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute><LogIn /></PublicRoute>,
    }, 
    {
        path: "/home",
        element: <PrivateRoute><Home /></PrivateRoute>,
    },
    {
        path: "/metrics",
        element: <PrivateRoute><Metrics /></PrivateRoute>,
    },
    {
        path: "/actions",
        element: <PrivateRoute><Actions /></PrivateRoute>,
    },
    {
        path: "/notifications",
        element: <PrivateRoute><Notifications /></PrivateRoute>,
    },
    {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>,
    },
]);

export default router;