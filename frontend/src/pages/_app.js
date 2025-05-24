import defaultOptions from "@/config/reactQuery";
import ModalProvider from "@/contexts/ModalContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </QueryClientProvider>
  );
}
