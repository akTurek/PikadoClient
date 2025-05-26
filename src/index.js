import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthProvider";
import { ThemeContextProvider } from './context/LightDark';
import { CurrentGroupProvider } from './context/CurrentGroup';
import { InviteListProvider } from './context/InviteList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <CurrentGroupProvider>
          <InviteListProvider>
            <App />
          </InviteListProvider>
        </CurrentGroupProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


