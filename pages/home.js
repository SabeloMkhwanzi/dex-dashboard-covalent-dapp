import React from 'react'
// Chakra import
import { Box, Text, Button, } from '@chakra-ui/react'
// Components import
import Health from '../components/Health/Health' 
import Ecosystem from '../components/Ecosystem/Ecosystem'
import DexButton from '../components/Button/DexButton'

const Home = () => {
    return (

        
        <div>
            <Box
            paddingBottom="5"
            >
                <DexButton />
                <Text
                fontWeight="bold"   
                fontSize="xl"
                >
                 DASHBOARD
                </Text>
                <Text
                fontWeight="light"   
                as="h6"
                color="gray.500"
                >
                 OVERVIEW
                </Text>
               
            </Box>
             <Health /> 
             <Ecosystem /> 

        </div>


    )
}

export default Home;
