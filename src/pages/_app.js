import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const SmoothScroll = dynamic(() => import("@/Components/SmoothScroll"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ankit Kumar | Frontend Developer & SEO Specialist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SmoothScroll />
      <Component {...pageProps} />
    </>
  );
}

