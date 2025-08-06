import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useParams,
} from "react-router-dom";

import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthProvider";
import { ThemeContext } from "./context/LightDark";
import MainLayout from "./layouts/mainlayout/MainLayout";
import { CreateGroup } from "./pages/createGroup/CreateGroup";
import FindGroup from "./pages/findGroup/FindGroup";
import Groups from "./components/groups/Groups";
import GroupPage from "./pages/groupPage/GroupPage";
import { CurrentGroup } from "./context/CurrentGroup";
import { GameContext } from "./context/GameContext";
import GameLoby from "./pages/gameLoby/GameLoby";
import GameLayout from "./layouts/gameLayout/GameLayout";
import FindFriend from "./pages/findFriends/FindFriend";
import FriendePage from "./pages/friendPage/FriendePage";
import Profile from "./pages/profile/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { currentGroup, leveGroupPage } = useContext(CurrentGroup);
  const { gameContext } = useContext(GameContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  function ProtectedGroupRoute({ children }) {
    const { groupId } = useParams();
    const { currentGroup } = useContext(CurrentGroup);

    if (!currentGroup || currentGroup.id != groupId) {
      return <Navigate to="/" replace />;
    }

    return children;
  }

  function ProtectedGameRoute({ children }) {
    const { gameId } = useParams();
    const { gameContext } = useContext(GameContext);

    if (!gameContext || gameContext.gameId != gameId) {
      return <Navigate to="/" replace />;
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Groups /> },
        { path: "/newgroup", element: <CreateGroup /> },
        { path: "/findgroup", element: <FindGroup /> },
        { path: "/addfriend", element: <FindFriend /> },
        { path: "/friends", element: <FriendePage /> },
        { path: "/profile", element: <Profile /> },
        {
          path: "/group/:groupId",
          element: (
            <ProtectedGroupRoute>
              <GroupPage />
            </ProtectedGroupRoute>
          ),
        },
      ],
    },
    {
      path: "/play",
      element: (
        <ProtectedGameRoute>
          <GameLayout />
        </ProtectedGameRoute>
      ),
      children: [{ path: ":gameId", element: <GameLoby /> }],
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
