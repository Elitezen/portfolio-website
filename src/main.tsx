import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import "./main.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScriptlyStudios from "./pages/ScriptlyStudios";
import KanaFlow from "./pages/KanaFlow";
import Expressia from "./pages/Expressia";
import Error from "./pages/Error";

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
	},
	{
		path: "kanaflow",
		element: <KanaFlow />
	},
	{
		path: "expressia",
		element: <Expressia />
	},
	{
		path: "*",
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
		<Analytics />
	</React.StrictMode>
);