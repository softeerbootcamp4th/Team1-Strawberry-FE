import { GlobalContextProvider } from "./core/contexts/globalContext";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { handleQueryError } from "./data/config/handleQueryError";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
      onError: handleQueryError,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: handleQueryError,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}
export default App;
