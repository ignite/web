import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import "@ignt/react-library/dist/style.css";
import AddressProvider from "./def-hooks/addressContext";

import DenomProvider from "./def-hooks/denomContext";
import WalletProvider from "./def-hooks/walletContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AddressProvider>
        <WalletProvider>
          <DenomProvider>
            <RouterProvider router={router} />
          </DenomProvider>
        </WalletProvider>
      </AddressProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
