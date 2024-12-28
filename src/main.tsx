import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import "./main.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScriptlyStudios from "./pages/Home/sections/MyWork/pages/ScriptlyStudios";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/contact",
		element: <Contact />
	},
	{
		path: "scriptly-studios",
		element: <ScriptlyStudios />
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);