import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Ankit Kumar - Frontend Developer & SEO Specialist. Building modern, high-performance web applications with React, Next.js, and cutting-edge design."
        />
        <meta name="theme-color" content="#07080e" />
      </Head>
      <body className="antialiased bg-[#07080e] text-[#f8fafc]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

