import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

// Use dynamic import to avoid page hydrated.
// reference: https://github.com/pmndrs/zustand/issues/1145#issuecomment-1316431268
const ConnectionSidebar = dynamic(() => import("@/components/ConnectionSidebar"), {
  ssr: false,
});
const ConversationView = dynamic(() => import("@/components/ConversationView"), {
  ssr: false,
});
const QueryDrawer = dynamic(() => import("@/components/QueryDrawer"), {
  ssr: false,
});

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DB Chat - Chat-based SQL Client and Editor for the next decade</title>
        <meta name="description" content="Chat-based SQL Client and Editor for the next decade" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" property="og:title" content="DB Chat" />
        <meta name="og:description" property="og:description" content="Chat-based SQL Client and Editor for the next decade" />
        <meta name="og:image" property="og:image" content="" />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:url" property="og:url" content="" />
      </Head>

      <h1 className="sr-only">DB Chat</h1>

      <main className="w-full h-full flex flex-row dark:bg-zinc-800">
        <ConnectionSidebar />
        <ConversationView />
        <QueryDrawer />
      </main>

      <Script defer data-domain="" src="" />
    </div>
  );
};

export default IndexPage;
