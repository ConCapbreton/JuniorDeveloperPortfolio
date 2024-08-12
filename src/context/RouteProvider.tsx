import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../components/MainPage/MainPage";
import CvAbout from "../components/CV/CvAbout";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: "", element: <MainPage />},
            {path: ":CV", element: <CvAbout />},
        ],
    },
]);