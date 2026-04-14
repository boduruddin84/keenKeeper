import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../errorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h2>Home Page</h2>,
      },
      {
        path: "/timeline",
        element: <h2>Timeline</h2>,
      }
    ],
    errorElement: <ErrorPage />,
    
  },
]);