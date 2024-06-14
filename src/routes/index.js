import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import Gallary from "../modules/gallary";
import Ourteam from "../modules/ourteam";
import Contactus from "../modules/contactus";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/ourteam",
                element: <Ourteam />
            },
            {
                path: "/gallary",
                element: <Gallary />
            },
            {
                path: "/contactus",
                element: <Contactus />
            },
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;