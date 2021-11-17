/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Moment from "react-moment";
import { chakra, Box, useColorModeValue, SimpleGrid, Text, Progress, } from "@chakra-ui/react";
import { useGetHealthQuery } from "../../services/healthCovalentApiQuick";


const Healths = () => {
    const { data, isFetching } = useGetHealthQuery()
    const chainItems = data?.data?.items;
    if (isFetching) return  <Progress size="xs" isIndeterminate />
    
    return (
      
    <Box justifyContent="center" textAlign="center">
    <Text textAlign="left"
     fontWeight="bold"
     paddingBottom="5"
     paddingTop="18"
    >HEALTH
    </Text>
         {chainItems.map(items =>( 
     <SimpleGrid columns={[1, null, 4]} spacing={4} key={items.chain_id} >           
      {/*Last Block Hight : Section */}
        <Box
        w="full" maxW="xs" mx="auto" px={4} py={3} 
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
        w="full" maxW="xs" mx="auto" px={4} py={3}
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
            <Moment parse="YYYY-MM-DD HH:mm">{items.latest_block_signed_at}</Moment>
            
          </chakra.p>
        </Box>   
      </Box>


    {/*Synced Block height : Section */}
    <Box
        w="full" maxW="xs" mx="auto" px={4} py={3}
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
        w="full" maxW="xs" mx="auto" px={4} py={3}
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
           <Moment parse="YYYY-MM-DD HH:mm">{items.synced_block_signed_at}</Moment>        
          </chakra.p>
        </Box>   
      </Box>                
  </SimpleGrid> 
  ))}
 </Box>
  
  );
};

export default Healths;