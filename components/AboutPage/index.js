/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Box,
  Text,
  Image,
  Link,
  HStack,
  VStack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div>
      <Box px={4} mx="auto">
        <Text
          textAlign="left"
          fontWeight="bold"
          fontSize="xl"
          paddingBottom="28"
        >
          About
        </Text>

        <Box
          shadow="xl"
          rounded="md "
          borderRadius="lg"
          borderWidth={1}
          borderColor="green.900"
          bg={useColorModeValue("white", "gray.800")}
          mb="21.5%"
        >
          <Text paddingInlineEnd="3" paddingInlineStart="3" paddingTop="3">
            DashDEX Dashboard created to help visualize key analytics around
            Pools, swaps, liquidity, volumes, Lending, borrowing stats and
            Trading pair positions. With the help of Covalent API fetching data
            was made simple and possible.{" "}
          </Text>
          <br />
          <Text paddingInlineEnd="3" paddingInlineStart="3">
            This project was created during the{" "}
            <Link href="https://gitcoin.co/issue/covalenthq/covalent-gitcoin-bounties/6/100026821">
              Hackathon: DeFi & Cross-chain Interoperability Hackathon,
            </Link>
          </Text>
          <Text paddingInlineEnd="3" paddingInlineStart="3">
            <Link href="https://www.covalenthq.com/">
              <br /> powered by the Covalent API.
            </Link>
          </Text>
          <HStack spacing={3}>
            <Image
              paddingInlineStart="3"
              maxW="50"
              src="https://chainstack.com/wp-content/uploads/2020/06/covalent.png"
            />
            <Image
              maxW="50"
              src="https://logowik.com/content/uploads/images/gitcoin5130.jpg"
            />
            <Image maxW="50" src="https://c.gitcoin.co/Logo_purple.png" />
          </HStack>{" "}
          <br />
          <Text paddingInlineEnd="3" paddingInlineStart="3" paddingBottom="3">
            Made with ❤ by Sabelo Mkhwanazi{" "}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
