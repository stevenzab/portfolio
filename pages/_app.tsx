import "../app/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next"
import RootLayout from "@/components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <Analytics />
    </RootLayout>
  );
};

export default MyApp;
