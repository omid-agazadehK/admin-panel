import { BrowserRouter } from "react-router";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./config/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ModalProvider from "./contexts/ModalContext";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
