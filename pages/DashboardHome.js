import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Container, Grid, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react'
//import millify from 'millify'


import { useGetEcosystemQuery } from '../services/ecosystemCovalentApi'
import { useGetHealthQuery } from '../services/ecosystemCovalentApi'

const DashboardHome = () => {
    const { data, isFetching } = useGetEcosystemQuery()
    const  chainItems = data?.data?.items;


   if (isFetching) return 'Loading..';
    
    return (

        
        <div>
            <Box>
                {console.log(data.data.items)}   
                <Box>
                  <Box>
                      <VStack>
                          <Text color="GrayText" fontSize="sm">OVERVIEW</Text>
                          <Text color="FFFFFF" fontSize="lg">Dashboard</Text>
                      </VStack>
                  </Box>
                <Container>
                 <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                    <Box w="100%" bg="blue.300">
                            <Text color="gray.200" icon={""}>Latest Block signed</Text>
                            <Text color="FFFFFFF" as="samp" >{}</Text>
                    </Box>
                    <Box w="100%" bg="blue.300">
                            <Text color="gray.200" icon={""}>Synced Block signed</Text>
                            <Text color="FFFFFFF" as="samp" >{}</Text>
                    </Box>
                    <Box w="100%" bg="blue.300">
                            <Text color="gray.200" icon={""}>Latest Block Height</Text>
                            <Text color="FFFFFFF" as="samp" >{}</Text>
                    </Box>
                    <Box w="100%" bg="blue.300">
                            <Text color="gray.200" icon={""}>Synced Block Height</Text>
                            <Text color="FFFFFFF" as="samp" >{}</Text>
                    </Box> 
                 </Grid>
                </Container>
                </Box>
                <Box>
                    <UnorderedList>
                        {chainItems.map(items =>(
                            <ListItem key={items.chain_id}>
                                {items.total_swaps_24h}
                            </ListItem>
                        ))}
                    </UnorderedList>     
                </Box>
            </Box>       
        </div>
    )
}

    export default DashboardHome;
