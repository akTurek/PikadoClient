import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthProvider";
import { ThemeContextProvider } from "./context/LightDark";
import { CurrentGroupProvider } from "./context/CurrentGroup";
import { InviteListProvider } from "./context/InviteList";
import { GameContextProvider } from "./context/GameContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <CurrentGroupProvider>
            <InviteListProvider>
              <GameContextProvider>
                <App />
              </GameContextProvider>
            </InviteListProvider>
          </CurrentGroupProvider>
        </QueryClientProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
