import { createBrowserRouter, Navigate } from "react-router-dom";
import Authorization from "../page/authorization/Authorization.jsx";
import Home from "../page/home/Home.jsx";

export const privateRoute = createBrowserRouter([
    {
        path: '/',
        element: <Authorization />,
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    }
]);

export const publicRoute = createBrowserRouter([
    {
        path: '/',
        element: <Authorization />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    }
]);