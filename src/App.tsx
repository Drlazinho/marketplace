import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | marketplace" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
