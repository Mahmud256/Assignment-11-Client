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
import UpdateAssignment from "../components/UpdateAssignment/UpdateAssignment";
import SubmissionForm from "../page/SubmissionForm/SubmissionForm";
import Submitted from "../page/SubmittedAssignment/Submitted";
import MyAssignment from "../page/MyAssignment/MyAssignment";

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
                element: <Assignments></Assignments>,
                loader: () => fetch("http://localhost:5000/assignment")
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/assignment')
            },
            {
                path: '/updateassignment/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: 'subform/:id',
                element: <PrivateRoute><SubmissionForm></SubmissionForm></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/submitted',
                element: <PrivateRoute><Submitted></Submitted></PrivateRoute>
                // loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/my',
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
                //loader: () => fetch('http://localhost:5000/assignment')
            }
        ]
    },
]);

export default router;