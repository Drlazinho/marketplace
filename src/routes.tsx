import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Products } from "./pages/app/products/products";
import { AuthLayout } from "./pages/_layout/auth";
import { SignIn } from "./pages/auth/Sign-in";
import { SignUp } from "./pages/auth/Sign-up";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            { path: '/', element: <Dashboard/> },
            { path: '/products', element: <Products/> }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "/sign-in", element: <SignIn />, },
            { path: "/sign-up", element: <SignUp />, }
        ]
    },
])