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
import { 
    
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import millify from "millify";

import Ecosystempoolsspirit from '../Ecosystem/ecosystempoolsspirit'

import { useGetPoolsQuery } from '/services/poolsCovalentApiSpirit'

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 750,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1130,
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
  }));

const Pool = () => {
    const { data, isFetching } = useGetPoolsQuery()
    const chainItems = data?.data?.items
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
   if (isFetching) return  <Progress size="xs" isIndeterminate />
    return (
     <> <div>
        
         <Ecosystempoolsspirit />

        
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table borderColor="green.900" borderWidth={1} className={classes.table} aria-label="simple table" bg={useColorModeValue("white", "gray.800")}>
        <TableHead>
          <TableRow>
            <Th><Text color={useColorModeValue("white", "gray.500")}>NAME</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>LIQUIDITY</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>VOLUME(24H)</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>VOLUME(7D)</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>SWAP(24H)</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>FEES(24H)</Text></Th>
            <Th><Text color={useColorModeValue("white", "gray.500")}>%FEES(YEARLY)</Text></Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {chainItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items) => (
            <Tr key={items.chain_id}>
              <Td>
                  <HStack>
                    <Avatar  name={items.token_0.contract_name} src={items.token_0.logo_url} />
                    <Avatar name={items.token_1.contract_name} src={items.token_1.logo_url} />
                    <Text color={useColorModeValue("white", "gray.200")} >{items.token_0.contract_ticker_symbol} –</Text>
                    <Text color={useColorModeValue("white", "gray.200")} >{items.token_1.contract_ticker_symbol}</Text>                    
                  </HStack>
              </Td>
              <Td color={useColorModeValue("white", "gray.200")}>${millify(items.total_liquidity_quote)}</Td>
              <Td color={useColorModeValue("white", "gray.200")}>${millify(items.volume_24h_quote)}</Td>
              <Td color={useColorModeValue("white", "gray.200")}>${millify(items.volume_7d_quote)}</Td>
              <Td color={useColorModeValue("white", "gray.200")}>{(items.swap_count_24h)}</Td>
              <Td color={useColorModeValue("white", "gray.200")}>${millify(items.fee_24h_quote)}</Td>
              <Td color={useColorModeValue("green", "green")}>{millify(items.annualized_fee*100)}%</Td>
            </Tr>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination  
            rowsPerPageOptions={[5, 10, 15]}
            count={chainItems.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            bg={useColorModeValue("white", "gray.800")}
        />
        </TableFooter>
      </Table>
    </TableContainer>             
                   
            
        
        </div>
        </>
    )
}

export default Pool;
  