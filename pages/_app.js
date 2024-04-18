import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../public/css/templatemo.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <LoadingBar
        color="#2eca6a"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
