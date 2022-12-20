import Head from "next/head";

// Chakra imports
import { Box } from "@chakra-ui/layout";
import { FooterPage, SideNavbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>DashDEX - DeX Dashboard</title>
        <meta name="description" content="DEX Dashboard" />
      </Head>
      <Box>
        <SideNavbar />
        <FooterPage />
      </Box>
    </>
  );
}
