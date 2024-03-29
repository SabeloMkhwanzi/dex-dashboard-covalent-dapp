/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Table,
  Tr,
  Th,
  Td,
  Text,
  useColorModeValue,
  Avatar,
  HStack,
  Progress,
} from "@chakra-ui/react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 750,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 1130,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

import { useQuery } from "react-query";
import EcosystemPoolQuick from "./EcosystemPoolQuick";
import numbro from "numbro";
//COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENT_APIKEY;
const chainID = 137;
const dexName = "quickswap";

export default function PoolQuick() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["ecosystem21"], async () => {
    const res = await fetch(
      `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/pools/?key=${APIKey}`
    );
    return res.json();
  });

  const chainItems = data?.data?.items;

  //console.log(chainItems);

  if (isFetching) return <Progress size="xs" isIndeterminate />;

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {" "}
      <div>
        <EcosystemPoolQuick />

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table
            borderColor="green.900"
            borderWidth={1}
            className={classes.table}
            aria-label="simple table"
            bg={useColorModeValue("inherit", "gray.800")}
          >
            <TableHead>
              <TableRow>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    NAME
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    LIQUIDITY
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    VOLUME(24H)
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    VOLUME(7D)
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    SWAP(24H)
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    FEES(24H)
                  </Text>
                </Th>
                <Th>
                  <Text color={useColorModeValue("inherit", "gray.500")}>
                    %FEES(YEARLY)
                  </Text>
                </Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {chainItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((items) => (
                  <Tr key={items.chain_id}>
                    <Td>
                      <HStack>
                        <Avatar
                          name={items.token_0.contract_name}
                          src={items.token_0.logo_url}
                        />
                        <Avatar
                          name={items.token_1.contract_name}
                          src={items.token_1.logo_url}
                        />
                        <Text color={useColorModeValue("inherit", "gray.200")}>
                          {items.token_0.contract_ticker_symbol} –
                        </Text>
                        <Text color={useColorModeValue("inherit", "gray.200")}>
                          {items.token_1.contract_ticker_symbol}
                        </Text>
                      </HStack>
                    </Td>
                    <Td color={useColorModeValue("inherit", "gray.200")}>
                      {numbro(items.total_liquidity_quote).formatCurrency({
                        average: true,
                        mantissa: 2,
                        optionalMantissa: true,
                      })}
                    </Td>
                    <Td color={useColorModeValue("inherit", "gray.200")}>
                      {numbro(items.volume_24h_quote).formatCurrency({
                        average: true,
                        mantissa: 2,
                        optionalMantissa: true,
                      })}
                    </Td>
                    <Td color={useColorModeValue("inherit", "gray.200")}>
                      {numbro(items.volume_7d_quote).formatCurrency({
                        average: true,
                        mantissa: 2,
                        optionalMantissa: true,
                      })}
                    </Td>
                    <Td color={useColorModeValue("inherit", "gray.200")}>
                      {items.swap_count_24h}
                    </Td>
                    <Td color={useColorModeValue("inherit", "gray.200")}>
                      {numbro(items.fee_24h_quote).formatCurrency({
                        average: true,
                        mantissa: 2,
                        optionalMantissa: true,
                      })}
                    </Td>
                    <Td color={useColorModeValue("green", "green")}>
                      {numbro(items.annualized_fee).format({
                        output: "percent",
                        mantissa: 1,
                        spaceSeparated: true,
                        negative: "parenthesis",
                      })}
                    </Td>
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
  );
}
