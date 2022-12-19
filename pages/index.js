// components imports

import Footers from "../components/Footer/Footers";
import Siderbar from "../components/Siderbar/siderbar";
import Head from "next/head";

// Chakra imports
import { Box } from "@chakra-ui/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>DashDEX - DeX Dashboard</title>
        <meta name="description" content="DEX Dashboard" />
      </Head>
      <Box>
        <Siderbar />
        <Footers />
      </Box>
    </>
  );
}
