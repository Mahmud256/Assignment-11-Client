import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import LoginAuth from "../page/Login/LoginAuth";
import Register from "../page/Register/Register";
import CreateAssignment from "../components/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../page/Assignments/Assignments";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Details from "../page/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: () => fetch("http://localhost:5000/assignment")
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/assignment')
            }
            // {
            //     path: '/updateproduct/:id',
            //     element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://assignment-10-server-side-vert.vercel.app/product/${params.id}`)
            // }
        ]
    },
]);

export default router;