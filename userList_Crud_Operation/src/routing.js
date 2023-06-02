import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Deleteuser from "./components/Deleteuser";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/adduser",
                element: <Adduser/>
            },
            {
                path: "/editUser",
                element: <Edituser/>
            },
            {
                path: "/deleteUser/:userEmail",
                element: <Deleteuser/>
            },
        ]
    }
]);

export default router;