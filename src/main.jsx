import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Stores from "./pages/Stores.jsx";
import SignInPage from './pages/SignIn.jsx';
import Staff from "./pages/Staff.jsx";
import Notes from "./pages/Notes.jsx";

const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: Dashboard,
          },
          {
            path: '/store/:storeId',
            Component: Stores,
          },
          {
            path: '/staff',
            Component: Staff,
          },
          {
            path: '/notes',
            Component: Notes,
          },
        ],
      },
      {
        path: '/sign-in',
        Component: SignInPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
