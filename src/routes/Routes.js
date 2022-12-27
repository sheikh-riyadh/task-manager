import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTast/AddTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import MyTask from "../components/MyTask/MyTask";
import Main from "../layout/Main";

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
            }
        ]
    }
])