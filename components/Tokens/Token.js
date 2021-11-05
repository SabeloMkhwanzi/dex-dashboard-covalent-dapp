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
  Progress, 
} from "@chakra-ui/react"
import Pagination from "@choc-ui/paginator"
import millify from "millify";

import EcosystemTokens from '../../components/Ecosystem/EcosystemTokens'

import { useGetTokensQuery } from '/services/tokensCovalentApi'

const Token = () => {
    const { data, isFetching } = useGetTokensQuery()
    const chainItems = data?.data?.items
    console.log(data);

   if (isFetching) return  <Progress size="xs" isIndeterminate />
    return (
     <> <div>
        
        <EcosystemTokens />

        <Box 
        
        bg={useColorModeValue("white", "gray.900")}
        shadow="xl"
        rounded="md "
        borderRadius="xl"
        borderWidth={1}
        borderColor="green.900"
        >
                       
           <Table variant="simple" size="md" borderRadius="xl" bg={useColorModeValue("white", "gray.800")}>               
                <Thead>
                    <Tr>
                    <Th>NAME</Th>
                    <Th>SYMBOL</Th>
                    <Th>LIQUIDITY</Th>
                    <Th>VOLUME(24H)</Th>
                    <Th>PRICE</Th>
                    <Th>SWAP(24H)</Th>
                    </Tr>
                </Thead>
                {chainItems.map(items => ( 
                <Tbody key={items.chain_id}>
                    <Tr>
                    <Td>{items.contract_name}</Td>
                    <Td >{items.contract_ticker_symbol}</Td>
                    <Td >${millify(items.total_liquidity_quote)}</Td>
                    <Td >${millify(items.total_volume_24h_quote)}</Td>
                    <Td >${millify(items.quote_rate)}</Td>
                    <Td >{items.swap_count_24h}</Td>
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

export default Token;
