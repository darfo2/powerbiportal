import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/page.css";
import App from "./App";
import Page from "./components/page";
import About from "./components/about";
import Contact from "./components/contactUs";


//PowerBI Pages
import Prod from "./components/ninPages/1prod";
import Price from "./components/ninPages/2price"
import Products from "./components/ninPages/3products"
import Dir from "./components/ninPages/4directory"
import Research from "./components/ninPages/5research"
import Marketing from "./components/ninPages/6marketing"
import Resource from "./components/ninPages/7resource"
import Credit from "./components/ninPages/8credit"

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
		},
		{
			path: "/dadospowerbiportal",
			element: <Page />,
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/contact",
			element: <Contact />,
		},
		{
			path: "/ProductionSupplyandDemand",
			element: <Prod />,
		},
		{
			path: "/PriceandPriceTrends",
			element: <Price />,
		},
		{
			path: "/ProductStandards",
			element: <Products />,
		},
		{
			path: "/Directory",
			element: <Dir />,
		},
		{
			path: "/Research",
			element: <Research />,
		},
		{
			path: "/Marketing",
			element: <Marketing />,
		},
		{
			path: "/Resource",
			element: <Resource />,
		},
		{
			path: "/Credit",
			element: <Credit />,
		}

	],
	{
		basename: "/PowerBI", // This should match your repository name
	},
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
