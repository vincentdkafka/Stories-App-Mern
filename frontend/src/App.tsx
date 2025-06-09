
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import StoryListPage from "./pages/StoryListPage";
import StoryPage, { storyLoader } from "./pages/StoryPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/stories",
        element: <StoryListPage />,
      },
      {
        path: "/stories/:name",
        element: < StoryPage/>,

        loader: storyLoader
      },
      {
        path: "/login",
        element: < LoginPage/>

      },
      {
        path: "/create-account",
        element: <CreateAccountPage/>
      }
    ],
  },
];


 const router = createBrowserRouter(routes)

 export default function App() {
  return <RouterProvider router = {router} />;
 }