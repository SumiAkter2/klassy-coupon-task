import { RouterProvider } from "react-router-dom";
import "./App.css";

import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <ToastContainer />
      </RouterProvider>
    </>
  );
}

export default App;
