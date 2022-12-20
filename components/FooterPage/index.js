/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Center,
  Container,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Footer function with social network link
export default function FooterPage() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "green.900")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor="green.700"
        color={useColorModeValue("gray.600", "green.900")}
      >
        <Container maxW={"6xl"} py={4}>
          <Center>
            <Text align="right">
              <Link target="_blank" href={"https://twitter.com/SabeloMkhwanaz"}>
                © {new Date().getFullYear()} Made with ❤ by Sabelo Mkhwanazi
              </Link>
            </Text>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
