import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react"; // Use Flex for layout
import { FooterPage, SideNavbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>DashDEX - DeX Dashboard</title>
        <meta name="description" content="DEX Dashboard" />
      </Head>
      <Flex direction="column" minHeight="100vh">
        {" "}
        {/* Flex container */}
        <Box flex="1">
          {" "}
          {/* Content area */}
          <SideNavbar />
          {/* Add other page content here */}
        </Box>
        <FooterPage /> {/* Footer will be pushed to the bottom */}
      </Flex>
    </>
  );
}
