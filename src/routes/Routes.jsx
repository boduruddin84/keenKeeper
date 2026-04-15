import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../errorPage/ErrorPage";
import HomePage from "../pages/homePage/HomePage";
import Timeline from "../pages/timelinePage/Timeline";
import Stats from "../pages/statsPage/Stats";
import FriendDetails from "../pages/FriendDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/friends/:id",
        element: <FriendDetails /> ,
      },
      {
        path: "/timeline",
        element: <Timeline /> ,
      },
      {
        path: "/stats",
        element: <Stats /> ,
      }
    ],
    errorElement: <ErrorPage />,
    
  },
]);