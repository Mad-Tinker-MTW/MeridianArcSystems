import Head from "next/head";
import App from "../src/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meridian Arc — Because Your Time Matters</title>
        <meta
          name="description"
          content="Meridian Arc designs systems that turn human intent into lasting capability. Meaningful Automation for Society."
        />
        <meta name="theme-color" content="#07111c" />
      </Head>
      <App />
    </>
  );
}
