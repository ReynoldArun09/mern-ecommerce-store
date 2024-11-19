import { Toaster } from "@/components/ui/sonner";
import CartProvider from "@/context/cart-provider";
import { ThemeProvider } from "@/context/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CartProvider>
            <ThemeProvider>
              {import.meta.env.VITE_APP_ENV === "development" && (
                <ReactQueryDevtools />
              )}
              {children}
            </ThemeProvider>
            <Toaster closeButton richColors />
          </CartProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
