/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  chakra,
  HStack,
  Badge,
  Box,
  useColorModeValue,
  SimpleGrid,
  Text,
  Progress,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Link,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "react-query";

//COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENT_APIKEY;

const chainID = 250;
const dexName = "Spiritswap";

const EcosystemTokensSpirit = () => {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["ecosystem15"], async () => {
    const res = await fetch(
      `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/ecosystem/?key=${APIKey}`
    );
    return res.json();
  });

  const chainItems = data?.data?.items;

  //console.log(chainItems);

  if (isFetching) return <Progress size="xs" isIndeterminate />;

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Box
        justifyContent="center"
        textAlign="center"
        paddingTop="5"
        paddingBottom="12"
      >
        <Menu>
          <MenuButton
            as={Button}
            maxW="150px"
            fontWeight="bold"
            float="right"
            borderColor="blackAlpha.900"
            bg="green.700"
          >
            Select Dex
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Avatar
                src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png"
                alt=""
                mr="12px"
              />
              <Link href={"tokensushi"}>Sushiswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKIOOAwtjg8KA2YjlWOfRkP1qVVUfz51KGBlJrbRdCP1Ca-SYy5Ef7nRDHgOgN0DszuE&usqp=CAU"
                alt=""
                mr="12px"
              />
              <Link href={"tokenquick"}>Quickswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-F9CiUlLJdNkfMNT7AQ5a_0aO1F6yQkZzAYB3KBo5QSLRmK6oWWk7xa5OKxtgR5PDCY&usqp=CAU"
                alt=""
                mr="12px"
              />
              <Link href={"tokenpang"}>Pangolin</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://assets.coingecko.com/coins/images/15223/large/logo_200x200.png?1621992076"
                alt=""
                mr="12px"
              />
              <Link href={"tokenspooky"}>Spookyswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://assets.coingecko.com/coins/images/15118/large/token-icon_m.png?1660609477"
                alt=""
                mr="12px"
              />
              <Link href={"tokenspirit"}>Spiritswap</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Text textAlign="left" fontWeight="bold" fontSize="xl">
          All Tokens
        </Text>
        <Text fontWeight="light" as="h6" color="gray.500" textAlign="left">
          OVERVIEW
        </Text>

        {/*  dex_name + gas_token_price_quote + updated_at  */}

        {chainItems.map((items) => (
          <HStack key={items.chain_id}>
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge rounded="full" px="2" colorScheme="teal">
                  Dex Name
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {items.dex_name}
                </Box>
              </Box>
            </Box>

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" colorScheme="teal">
                  Price Quote
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  ${items.gas_token_price_quote}
                </Box>
              </Box>
            </Box>
          </HStack>
        ))}

        {chainItems.map((items) => (
          <SimpleGrid columns={[1, null, 3]} spacing={4} key={items.chain_id}>
            <Box
              w="full"
              maxW="xs"
              mx="auto"
              px={4}
              py={3}
              bg={useColorModeValue("white", "gray.800")}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="green.900"
            >
              {/*Last Block Hight : Section */}
              <Box>
                <chakra.h1
                  fontSize="lg"
                  fontWeight="normal"
                  mt={2}
                  color={useColorModeValue("gray.800", "white")}
                >
                  Total Active Pair(7d)
                </chakra.h1>
                <chakra.p
                  fontSize="sm"
                  mt={2}
                  textAlign="center"
                  color={useColorModeValue("gray.600", "green.600")}
                  as="samp"
                >
                  {items.total_active_pairs_7d}
                </chakra.p>
              </Box>
            </Box>

            <Box
              w="full"
              maxW="xs"
              mx="auto"
              px={4}
              py={3}
              bg={useColorModeValue("white", "gray.800")}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="green.900"
            >
              {/*Last Block Signed At : Section */}
              <Box>
                <chakra.h1
                  fontSize="lg"
                  fontWeight="normal"
                  mt={2}
                  color={useColorModeValue("gray.800", "white")}
                >
                  Total Fees(24h)
                </chakra.h1>
                <chakra.p
                  fontSize="sm"
                  mt={2}
                  color={useColorModeValue("gray.600", "green.600")}
                  as="samp"
                >
                  ${items.total_fees_24h}
                </chakra.p>
              </Box>
            </Box>

            <Box
              w="full"
              maxW="xs"
              mx="auto"
              px={4}
              py={3}
              bg={useColorModeValue("white", "gray.800")}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="green.900"
            >
              {/*Synced Block height : Section */}
              <Box>
                <chakra.h1
                  fontSize="lg"
                  fontWeight="normal"
                  mt={2}
                  color={useColorModeValue("gray.800", "white")}
                >
                  Total Swaps(24h)
                </chakra.h1>
                <chakra.p
                  fontSize="sm"
                  mt={2}
                  color={useColorModeValue("gray.600", "green.600")}
                  as="samp"
                >
                  {items.total_swaps_24h}
                </chakra.p>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
    </div>
  );
};

export default EcosystemTokensSpirit;
