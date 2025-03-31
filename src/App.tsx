import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | marketplace" />
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
