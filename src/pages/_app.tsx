import type { AppProps } from "next/app";
import { UserProvider } from "@/shared/store/user";
import "@/shared/styles/globals.css";
import StyledComponentsRegistry from "@/registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <StyledComponentsRegistry>
          <Component {...pageProps} />
        </StyledComponentsRegistry>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
