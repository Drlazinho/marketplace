import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { AuthLayout } from "./pages/_layout/auth";
import { SignIn } from "./pages/auth/Sign-in";
import { SignUp } from "./pages/auth/Sign-up";
import { Products } from './pages/app/products/pages/products'
import EditProduct from './pages/app/products/pages/edit-product'
import NewProduct from './pages/app/products/pages/new-product'
import { RequireAuth } from './auth/RequireAuth'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "/", element: <SignIn />, },
            { path: "/sign-up", element: <SignUp />, }
        ]
    },
    {
        path: "/",
        element: <RequireAuth />,
        children: [
          {
            path: "/",
            element: <AppLayout />,
            children: [
              { path: "/dashboard", element: <Dashboard /> },
              { path: "/products", element: <Products /> },
              { path: "/products/id", element: <EditProduct /> },
              { path: "/newproduct", element: <NewProduct /> },
            ],
          },
        ],
      },
   
])