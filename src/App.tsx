import React from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./components/Layout";

const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<Layout>
				<Login />
			</Layout>
		),
	},
	{
		path: "/browse",
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: "/browse/movie/:id",
		element: (
			<Layout>
				<MovieDetails />
			</Layout>
		),
	},
];

// TODO: avoid repetition of <Layout />
// TODO: move common stylings of pages to <Layout /> component

const App: React.FC = () => {
	const appRouter = createBrowserRouter(routes);

	return (
		<Provider store={appStore}>
			<RouterProvider router={appRouter} />
		</Provider>
	);
};

export default App;
