import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTast/AddTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Details from "../components/Details/Details";
import FourOFour from "../components/FourOFour/FourOFour";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import MyTask from "../components/MyTasks/MyTasks";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import Main from "../layout/Main";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            }, {
                path: '/my-task',
                element: <MyTask></MyTask>
            }, {
                path: '/completed-task',
                element: <CompletedTask></CompletedTask>
            }, {
                path: '/update-task/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_api_url}/my-task/${params.id}`)
            }, {
                path: '/task-details',
                element: <PrivateRouter><Details></Details></PrivateRouter>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]

    }
])