import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";
import moment from "moment";

import {
  Select,
  TextField,
  Box,
  InputLabel,
  Container,
  Typography,
} from "@material-ui/core";

//import { Container, Box, TextField, InputLabel, Select, Typography } from "@chakra-ui/react"; 
import useStyles from "./styles";
//import "./style.css";

// eslint-disable-next-line no-undef
const Charts = () => {
  const [state, setState] = useState([]);
  const [ticker, setTicker] = useState("BTC");
  const [currency, setCurrency] = useState("USD");
  const [dateFrom, setDateFrom] = useState("2020-01-01");
  const [dateTo, setDateTo] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    axios
      .get(
        `https://api.covalenthq.com/v1/pricing/historical/${currency}/${ticker}/?key=ckey_4e73d56514984838ab3206fbaf4&from=${dateFrom}&to=${dateTo}&prices-at-asc=true`
      )
      .then((response) => setState(response.data))
      .catch((error) => console.error(error));
  }, [ticker, dateFrom, dateTo, currency]);


  const data = state?.data?.prices.map(({ date, price }) => ({
    name: date,
    [ticker]: price,
  }));

  const styles = useStyles();

  return (
    <>
      <Container>
        <Typography variant="h1">Pricing endpoints</Typography>
      </Container>
      <Container style={{ background: "#fff" }}>
        
        <Box
          display="flex"
          marginBottom="36px"
          alignItems="center"
          justifyContent="center"
        >
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "16px",
            }}
          >
            <InputLabel color="#000">Select ticker</InputLabel>
            <Select
              className={styles.select}
              style={{
                marginRight: "36px",
              }}
              value={ticker}
              onChange={(event) => setTicker(event.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
              <option value="UNI">UNI</option>
              <option value="VEN">VEN</option>
            </Select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputLabel>Select currency</InputLabel>
            <Select
              classes={{ select: styles.select }}
              style={{ marginRight: "36px" }}
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
              <option value="CNY">CNY</option>
            </Select>
          </div>
          <TextField
            style={{ marginRight: "36px" }}
            id="date"
            color="red"
            label="Date from"
            type="date"
            onChange={(e) => setDateFrom(e.target.value)}
            value={dateFrom}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Date to"
            type="date"
            onChange={(e) => setDateTo(e.target.value)}
            value={dateTo}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <div className={styles.graph}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={ticker}
                stroke="#8884d8"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

// eslint-disable-next-line no-undef
export default Charts;