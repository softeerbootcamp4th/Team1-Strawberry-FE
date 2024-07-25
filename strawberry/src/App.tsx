import { GlobalContextProvider } from "./core/contexts/globalContext";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
