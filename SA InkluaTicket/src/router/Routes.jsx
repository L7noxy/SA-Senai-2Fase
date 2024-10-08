import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";

const Routes = createBrowserRouter([

{path: '/', element: <Home/>},

])

export default Routes;