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
} from "@chakra-ui/react";
import { useQuery } from "react-query";

//COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENT_APIKEY;

const chainID = 250;
const dexName = "spookyswap";

const Ecosystem = () => {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["ecosystem11"], async () => {
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
      <Box justifyContent="center" textAlign="center" paddingTop="34">
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
              <Box display="flex" alignItems="baseline">
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
        <Box paddingTop={12}>
          <SimpleGrid columns={[1, null, 1]} spacing={2}>
            <Box
              minW="1100"
              mx="auto"
              px={2}
              py={2}
              paddingTop={4}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="green.900"
              as="iframe"
              height="600"
              src="https://tokenterminal.com/terminal/projects/spookyswap/embed/key_metrics"
              title="Token Terminal"
              bg={useColorModeValue("white", "gray.800")}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Ecosystem;
