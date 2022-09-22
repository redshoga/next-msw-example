import "../styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = require("../msw/worker");
    worker.start();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
