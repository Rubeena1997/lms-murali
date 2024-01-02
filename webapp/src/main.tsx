import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

async function main() {
  const VITE_API_URL = (window as any).__VITE_API_URL__ || 'http://localhost:8080/api';

  console.log({
    PROD: import.meta.env.PROD,
    MODE: import.meta.env.MODE,
    VITE_API_URL,
  });

  if (import.meta.env.VITE_ENABLE_API_MOCKING) {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "mockServiceWorker.js",
      },
    });
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

main();
