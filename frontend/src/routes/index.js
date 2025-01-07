import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "", // Can also use "path: ''" or "index: true"
                element: <Home />
            }
        ]
    }
]);

export default router;
