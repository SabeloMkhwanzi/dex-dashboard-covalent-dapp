/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Moment from "react-moment";
import millify from "millify";
import { chakra, HStack, Badge, Box, useColorModeValue, SimpleGrid, Text, Progress, } from "@chakra-ui/react";

import { useGetEcosystemQuery } from "../../services/ecosystemCovalentApi";




 const Ecosystem = () => {
   const { data, isFetching } = useGetEcosystemQuery();
   const chainItems = data?.data?.items
   console.log(data);
   if (isFetching) return  <Progress hasStripe color="green.900" value={84} />
    
    return (
      <div>
        
  <Box justifyContent="center" textAlign="center">
    <Text textAlign="left"
     fontWeight="bold"
     paddingTop="5"
    >ECOSYSTEM
    </Text>
                   
      {/*  dex_name + gas_token_price_quote + updated_at  */}
      
      {chainItems.map(items =>(
      <HStack key={items.chain_id}>       
      <Box p="6">
          <Box d="flex" alignItems="baseline">
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
               {items.gas_token_price_quote}
            </Box>
          </Box>
       </Box> 

       {/* <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Last Update
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
               <Moment parse="YYYY-MM-DD HH:mm">{}</Moment>
            </Box>
          </Box>
       </Box> */}
         
      </HStack>
      ))}    
          
       {chainItems.map(items => (      
     <SimpleGrid columns={[1, null, 3]} spacing={4} key={items.chain_id} >           
      <Box
        w="full" maxW="xs" mx="auto" px={4} py={3} 
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
            Total Active Pair
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
        w="full" maxW="xs" mx="auto" px={4} py={3}
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
            Total Fees (last 24h)
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color={useColorModeValue("gray.600", "green.600")}
            as="samp"
          >
            {items.total_fees_24h}
            
          </chakra.p>
        </Box>   
      </Box>


    <Box
        w="full" maxW="xs" mx="auto" px={4} py={3}
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
            Total Swaps (last 24h)
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
 )
}

   
export default Ecosystem;