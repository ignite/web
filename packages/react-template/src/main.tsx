import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import AddressProvider from "./def-hooks/addressContext";

import WalletProvider from "./def-hooks/walletContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AddressProvider>
      <WalletProvider>
        <RouterProvider router={router} />
      </WalletProvider>
    </AddressProvider>
  </React.StrictMode>,
);
