/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState}  from 'react'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Box, useColorModeValue, SimpleGrid, Text, Progress, ButtonGroup, Button, Divider } from "@chakra-ui/react";

import { useGetEcosystemQuery } from '../../services/ecosystemCovalentApi'

const LineChart = (items) => {
   const dexPrice = [];
   const dexTimeStamp = [];

  //  for (let i = 0; i < items?.data.liquidity_chart_7d?.length; i += 1) {
  //    dexPrice.push(items?.data?.liquidity_chart_7d[i].price);
  //    dexTimeStamp.push(new Date(items?.data?.liquidity_chart_7d[i].timestamp).toLocaleDateString());
  //  }


  const data = {
    labels: dexTimeStamp,
    datasets: [
      {
        labels: 'Price in USD',
        data: dexPrice,
        fill: false,
        backgroundColor: 'green.700',
        borderColor: 'green.500',
        pointBorderColor: 'green.900'

      }
    ] 
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
   
  //if (isFetching) return 'Loader';
  

  const fetchData = (time) => {
    //fetching data from Redux
  }

  return (
    <div>
   <Box paddingTop="16">
      <SimpleGrid columns={[1, null, 2]} spacing={1.5}> 

      {/* Line Chart       */}
      <Box
        w="full" maxW="xl" mx="auto" px={4} py={3} 
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
        rounded="md "
        borderRadius="xl"
        borderWidth={1}
        borderColor="green.900"
      >  
      <Text
      fontWeight="bold"
      color="green.300"
      >
       <ButtonGroup  float="right" size="sm" isAttached variant="outline">
        <Button onClick={() => fetchData("7d")} borderColor="green.900" bg="green.700" mr="-px">7D</Button>
        <Button onClick={() => fetchData("30d")} borderColor="green.900" bg="green.700" aria-label="Add to friends">30D</Button>
        </ButtonGroup> 
         LIQUIDITY  7d
        </Text>              
        <Box>
          <Line data={data} options={options}/>
        </Box>   
      </Box>
      
          {/* Bar Chart            */}
       <Box
        w="full" maxW="xl" mx="auto" px={4} py={3}
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
        rounded="md "
        borderRadius="lg"
        borderWidth={1}
        borderColor="green.900"
      >
     <Text
     fontWeight="bold"
     color="green.300"
     >
        <ButtonGroup float="right" size="sm" isAttached variant="outline">
        <Button onClick={() => fetchData("7d")} borderColor="green.900" bg="green.700" mr="-px">7D</Button>
        <Button onClick={() => fetchData("30d")} borderColor="green.900" bg="green.700" aria-label="Add to friends">30D</Button>
        </ButtonGroup>
         VOLUME
        </Text>              
        <Box>
         <Bar data={data} options={options}/>
        </Box>   
      </Box>
      </SimpleGrid>   
     </Box>
     
        </div>
    )
}

export default LineChart;

