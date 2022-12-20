/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Container,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Footer function with social network link
export default function FooterPage() {
  return (
    <Box
      bg={useColorModeValue("gray.600", "gray.800")}
      color={useColorModeValue("gray.600", "gray.800")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor="green.700"
        color={useColorModeValue("gray.600", "green.900")}
      >
        <Container maxW={"6xl"} py={4}>
          <Text align="right">
            <Link href={"https://twitter.com/SabeloMkhwanaz"}>
              © 2021 Made with ❤ by Sabelo
            </Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
