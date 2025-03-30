import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { AuthLayout } from "./pages/_layout/auth";
import { SignIn } from "./pages/auth/Sign-in";
import { SignUp } from "./pages/auth/Sign-up";
import { Products } from './pages/app/products/pages/products'
import EditProduct from './pages/app/products/pages/edit-product'
import NewProduct from './pages/app/products/pages/new-product'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            { path: '/', element: <Dashboard/> },
            { path: '/products', element: <Products/> },
            { path: '/products/id', element: <EditProduct/> },
            { path: '/newproduct', element: <NewProduct/> }
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