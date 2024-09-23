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
  Progress,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import numbro from "numbro";

// COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENT_APIKEY;

const chainID = 1;
const dexName = "sushiswap";

export default function EcosystemSushi() {
  // Use React-Query to fetch Covalent API data
  const { data, error, isFetching } = useQuery(["ecosystem12"], async () => {
    const res = await fetch(
      `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/ecosystem/?key=${APIKey}`
    );
    return res.json();
  });

  const chainItems = data?.data?.items || []; // Default to an empty array if undefined

  // Define useColorModeValue outside of loops/conditionals
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("green.900", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const secondaryTextColor = useColorModeValue("gray.600", "green.600");

  if (isFetching) return <Progress size="xs" isIndeterminate />;

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Box justifyContent="center" textAlign="center" paddingTop="34">
        {/* Defensive check to ensure chainItems is an array */}
        {chainItems.length > 0 ? (
          chainItems.map((items) => (
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
                    {numbro(items.gas_token_price_quote).formatCurrency({
                      average: true,
                      mantissa: 2,
                      optionalMantissa: true,
                    })}
                  </Box>
                </Box>
              </Box>
            </HStack>
          ))
        ) : (
          <p>No data available</p>
        )}

        {chainItems.length > 0 &&
          chainItems.map((items) => (
            <SimpleGrid columns={[1, null, 3]} spacing={4} key={items.chain_id}>
              <Box
                w="full"
                maxW="xs"
                mx="auto"
                px={4}
                py={3}
                bg={bgColor}
                shadow="xl"
                rounded="md"
                borderRadius="lg"
                borderWidth={1}
                borderColor={borderColor}
              >
                <Box>
                  <chakra.h1
                    fontSize="lg"
                    fontWeight="normal"
                    mt={2}
                    color={textColor}
                  >
                    Total Active Pair(7d)
                  </chakra.h1>
                  <chakra.p
                    fontSize="sm"
                    mt={2}
                    textAlign="center"
                    color={secondaryTextColor}
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
                bg={bgColor}
                shadow="xl"
                rounded="md"
                borderRadius="lg"
                borderWidth={1}
                borderColor={borderColor}
              >
                <Box>
                  <chakra.h1
                    fontSize="lg"
                    fontWeight="normal"
                    mt={2}
                    color={textColor}
                  >
                    Total Fees(24h)
                  </chakra.h1>
                  <chakra.p
                    fontSize="sm"
                    mt={2}
                    color={secondaryTextColor}
                    as="samp"
                  >
                    {numbro(items.total_fees_24h).formatCurrency({
                      average: true,
                      mantissa: 2,
                      optionalMantissa: true,
                    })}
                  </chakra.p>
                </Box>
              </Box>

              <Box
                w="full"
                maxW="xs"
                mx="auto"
                px={4}
                py={3}
                bg={bgColor}
                shadow="xl"
                rounded="md"
                borderRadius="lg"
                borderWidth={1}
                borderColor={borderColor}
              >
                <Box>
                  <chakra.h1
                    fontSize="lg"
                    fontWeight="normal"
                    mt={2}
                    color={textColor}
                  >
                    Total Swaps(24h)
                  </chakra.h1>
                  <chakra.p
                    fontSize="sm"
                    mt={2}
                    color={secondaryTextColor}
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
              w={[300, 400, 1100]}
              mx="auto"
              px={2}
              py={2}
              paddingTop={4}
              shadow="xl"
              rounded="md"
              borderRadius="lg"
              borderWidth={1}
              borderColor={borderColor}
              as="iframe"
              height="600"
              src="https://tokenterminal.com/terminal/projects/sushiswap/embed/key_metrics"
              title="Token Terminal"
              bg={bgColor}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
