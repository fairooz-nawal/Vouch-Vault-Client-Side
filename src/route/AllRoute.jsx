import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddServices from "../pages/AddServices";
import MyServices from "../pages/MyServices";
import MyReview from "../pages/MyReview";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
            index:true,
            path:"/",
            Component: Home
        },
        {
            path:"/services",
            Component: Services
        },
        {
            path:"/addServices",
            Component: AddServices
        },
        {
            path:"/myServices",
            Component: MyServices
        },
        {
            path:"/myReview",
            Component: MyReview
        },
    ]
  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
        {
            index:true,
            path:"/auth/login",
            Component: Home
        },
        {
            path:"/auth/register",
            Component: Home
        }
    ]
  }
]);

export default router;