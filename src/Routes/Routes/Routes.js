import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Products from "../../Pages/Products/Products";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '*',
                element: <NotFoundPage></NotFoundPage>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
        ]
    }
])

export default router;