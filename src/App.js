import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import './app.scss'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/AuthProvider";
import MainLayout from "./layouts/mainlayout/MainLayout";
import { CreateGroup } from "./pages/createGroup/CreateGroup";
import FindGroup from "./pages/findGroup/FindGroup";
import GroupPage from "./pages/groupPage/GroupPage";

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"/>;
    }
    console.log(currentUser)
    return children;
  };
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <MainLayout/>
          </ProtectedRoute>
        ),
        children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/newgroup",
          element:<CreateGroup/>
        },
        {
          path:"/findgroup",
          element:<FindGroup/>
        },
        {
          path:"/group/:id",
          element:<GroupPage/>
        },
        
      ]
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      
    ]);
    
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );

}

export default App;
