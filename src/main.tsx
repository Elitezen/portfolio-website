import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './main.scss';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ScriptlyStudios from './pages/Portfolio/ScriptlyStudios';
import Expressia from './pages/Portfolio/Expressia';
import OpenSourced from './pages/Portfolio/OpenSourced';
import Extras from './pages/Portfolio/Extras';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  	{
    	path: "/",
    	element: <Home />
  	},
	{
		path: "portfolio",
		element: <Portfolio />,
	},
	{
		path: 'portfolio/scriptly-studios',
		element: <ScriptlyStudios />
	},
	{
		path: 'portfolio/expressia',
		element: <Expressia />
	},
	{
		path: 'portfolio/open-source',
		element: <OpenSourced />
	},
	{
		path: 'portfolio/extras',
		element: <Extras />
	},
	{
		path: '/contact',
		element: <Contact />
	}
], {
	basename: '/'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
