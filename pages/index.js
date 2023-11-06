import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fb Clone</title>
      </Head>
      <LeftSidebar />
      <RightSidebar />
      <Feed />
    </div>
  );
}
