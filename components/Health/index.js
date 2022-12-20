/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Moment from "react-moment";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  Text,
  Progress,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
//COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENT_APIKEY;

// Define a service using a base URL and expected endpoints
const chainID = 250;
const dexName = "spookyswap";

export default function Health() {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["healths"], async () => {
    const res = await fetch(
      `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/health/?key=${APIKey}`
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
    <Box justifyContent="center" textAlign="center">
      <Text
        textAlign="left"
        fontWeight="bold"
        paddingBottom="5"
        paddingTop="18"
      >
        HEALTH
      </Text>
      {chainItems.map((items) => (
        <SimpleGrid columns={[1, null, 4]} spacing={4} key={items.chain_id}>
          {/*Last Block Hight : Section */}
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
            <Box>
              <chakra.h1
                fontSize="lg"
                fontWeight="normal"
                mt={2}
                color={useColorModeValue("gray.800", "white")}
              >
                Last Block Height
              </chakra.h1>
              <chakra.p
                fontSize="sm"
                mt={2}
                textAlign="center"
                color={useColorModeValue("gray.600", "green.600")}
                as="samp"
              >
                {items.latest_block_height}
              </chakra.p>
            </Box>
          </Box>

          {/*Last Block Signed At : Section */}
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
            <Box>
              <chakra.h1
                fontSize="lg"
                fontWeight="normal"
                mt={2}
                color={useColorModeValue("gray.800", "white")}
              >
                Last Block Signed
              </chakra.h1>
              <chakra.p
                fontSize="sm"
                mt={2}
                color={useColorModeValue("gray.600", "green.600")}
                as="samp"
              >
                <Moment parse="YYYY-MM-DD HH:mm">
                  {items.latest_block_signed_at}
                </Moment>
              </chakra.p>
            </Box>
          </Box>

          {/*Synced Block height : Section */}
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
            <Box>
              <chakra.h1
                fontSize="lg"
                fontWeight="normal"
                mt={2}
                color={useColorModeValue("gray.800", "white")}
              >
                Synced Block Height
              </chakra.h1>
              <chakra.p
                fontSize="sm"
                mt={2}
                color={useColorModeValue("gray.600", "green.600")}
                as="samp"
              >
                {items.synced_block_height}
              </chakra.p>
            </Box>
          </Box>

          {/*Synced Block Signed At : Section */}
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
            <Box>
              <chakra.h1
                fontSize="lg"
                fontWeight="normal"
                mt={2}
                color={useColorModeValue("gray.800", "white")}
              >
                Synced Block Signed
              </chakra.h1>
              <chakra.p
                fontSize="sm"
                mt={2}
                color={useColorModeValue("gray.600", "green.600")}
                as="samp"
              >
                <Moment parse="YYYY-MM-DD HH:mm">
                  {items.synced_block_signed_at}
                </Moment>
              </chakra.p>
            </Box>
          </Box>
        </SimpleGrid>
      ))}
    </Box>
  );
}
