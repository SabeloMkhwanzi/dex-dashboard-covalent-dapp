/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
  useColorModeValue,
  Flex,
  Wrap,
  WrapItem,
  Avatar,
  HStack,
  Image,
  Badge,
  Progress, 
} from "@chakra-ui/react"
import Pagination from "@choc-ui/paginator"
import millify from "millify";

import EcosystemPools from '../../components/Ecosystem/EcosystemPools'

import { useGetPoolsQuery } from '/services/poolsCovalentApi'

const pool = () => {
    const { data, isFetching } = useGetPoolsQuery()
    const chainItems = data?.data?.items
    console.log(data);

    if (isFetching) return  <Progress size="xs" isIndeterminate />
    return (
     <> <div>
       
      <EcosystemPools />
        
     {/* All Pools Table */}
     <Box 
        w="full" maxW="7xl"  
        bg={useColorModeValue("white", "gray.900")}
        shadow="xl"
        rounded="md"
        borderRadius="xl"
        borderWidth={1}
        borderColor="green.900"
        spacing={1}
        >             
            <Table variant="simple" size="md" borderRadius="xl" bg={useColorModeValue("white", "gray.800")}>               
                <Thead>
                    <Tr>
                    <Th>NAME</Th>
                    <Th>LIQUIDITY</Th>
                    <Th>VOLUME(24H)</Th>
                    <Th>VOLUME(7D)</Th>
                    <Th>SWAP(24H)</Th>
                    <Th>FEES(24H)</Th>
                    <Th>%FEES(YEARLY)</Th>
                    </Tr>
                </Thead>
                {chainItems.map(items => ( 
                <Tbody key={items.chain_id}>
                    <Tr>
                    <Td>
                    <HStack>
                    <Avatar  name={items.token_0.contract_name} src={items.token_0.logo_url} />
                    <Avatar name={items.token_1.contract_name} src={items.token_1.logo_url} />
                    <Text>{items.token_0.contract_ticker_symbol} –</Text>
                    <Text>{items.token_1.contract_ticker_symbol}</Text>                    
                    </HStack>                    
                    </Td>
                    <Td >${millify(items.total_liquidity_quote)}</Td>
                    <Td >${millify(items.volume_24h_quote)}</Td>
                    <Td >${millify(items.volume_7d_quote)}</Td>
                    <Td >{items.swap_count_24h}</Td>
                    <Td >${millify(items.fee_24h_quote)}</Td>
                    <Td color="green" >{millify(items.annualized_fee*100)}%</Td>
                    </Tr>
                </Tbody>
                ))}           
            </Table>           
            <Flex
                w="full"
                bg={useColorModeValue("gray.400", "gray.900")}
                p={2}
                alignItems="center"
                justifyContent="center"
                >
                <Pagination
                    defaultCurrent={9}
                    total={100}
                    paginationProps={{ display: "flex" }}
                    pageNeighbours={1}
                    showQuickJumper
                />
            </Flex>            
        </Box>

        </div>
        </>
    )
}

export default pool;
