import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.scss";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ScriptlyStudios from "./pages/Portfolio/ScriptlyStudios";
import Expressia from "./pages/Portfolio/Expressia";
import OpenSourced from "./pages/Portfolio/OpenSourced";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "portfolio",
        element: <Portfolio />
    },
    {
        path: "portfolio/scriptly-studios",
        element: <ScriptlyStudios />
    },
    {
        path: "portfolio/expressia",
        element: <Expressia />
    },
    {
        path: "portfolio/open-source",
        element: <OpenSourced />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
