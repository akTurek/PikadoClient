import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import './app.scss';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthProvider";
import { ThemeContext } from "./context/LightDark"; 
import MainLayout from "./layouts/mainlayout/MainLayout";
import { CreateGroup } from "./pages/createGroup/CreateGroup";
import FindGroup from "./pages/findGroup/FindGroup";
import Members from "./components/members/Members";
import Groups from "./components/groups/Groups";
import GroupPage from "./pages/groupPage/GroupPage";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // ✅ Access theme context

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Groups/> },
        { path: "/newgroup", element: <CreateGroup /> },
        { path: "/findgroup", element: <FindGroup /> },
        { path: "/group/:groupId", element: <GroupPage/>},
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div className={`theme-${theme ? "dark" : "light"}`}> 
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
