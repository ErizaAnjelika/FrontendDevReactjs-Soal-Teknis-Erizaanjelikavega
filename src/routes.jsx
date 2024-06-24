import { Navigate, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import ProtectedRoute from "./hoc/ProtectedRoute";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/restaurants",
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/details/:fsq_id",
    element: (
      <ProtectedRoute>
        <DetailPage />
      </ProtectedRoute>
    ),
  },
];
