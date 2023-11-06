import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import LoginAuth from "../page/Login/LoginAuth";
import Register from "../page/Register/Register";
import CreateAssignment from "../components/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../page/Assignments/Assignments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/login/auth',
                element: <LoginAuth></LoginAuth>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/create',
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: "/assignments",
                element: <PrivateRoute><Assignments></Assignments></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/assignments"),
              },
        ]
    },
]);

export default router;