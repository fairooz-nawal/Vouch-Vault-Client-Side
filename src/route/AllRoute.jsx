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
import ServiceDetail from "../pages/ServiceDetail";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoutes";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('http://localhost:3000/services')
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch('http://localhost:3000/allservices')
      },
      {
        path: "/addServices",
        element: <ProtectedRoute><AddServices></AddServices></ProtectedRoute>
      },
      {
        path: "/myServices",
        element: <ProtectedRoute> <MyServices></MyServices></ProtectedRoute>
      },
      {
        path: "/myReview",
        element: <ProtectedRoute><MyReview></MyReview></ProtectedRoute>
      },
      {
        path: "/singleService/:id",
        element: <ProtectedRoute><ServiceDetail></ServiceDetail></ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/allservices/${params.id}`),
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Registration
      }
    ]
  },
  {
    path: "*",
    Component: Error
  }
]);

export default router;