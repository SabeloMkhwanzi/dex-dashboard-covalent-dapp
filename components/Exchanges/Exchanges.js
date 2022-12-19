import { Box, Text, SimpleGrid, } from '@chakra-ui/react'
import React from 'react'

const Exchanges = () => {
    return (
        <div>
               
            <Box justifyContent="center" textAlign="center" paddingBottom="14">
            <Text textAlign="left"
             fontWeight="bold"
            fontSize="2xl"
             >Exchanges
             </Text>
             <Text textAlign="left"
             as="h6"
             fontSize="l"
             color="gray.500"
             >OVERVIEW
             </Text>
            </Box>    
            <SimpleGrid columns={[1, null, 2]} spacing={2} paddingBottom="5">
                <Box
                   as="iframe" 
                   title="Top Exchanges" 
                   frameBorder="1"
                    shadow="xl"
                    rounded="md "
                    borderRadius="lg"
                    borderWidth={1}
                    borderColor="green.900"
                   width="100%" height="900"
                   src="https://coinhippo.io/exchanges?view=widget&n=10&theme=dark"
                   align="center" 
                /> 
                <Box
                    as="iframe"
                    title="Top DeFi"
                    width="100%" height="900"
                    shadow="xl"
                    rounded="md "
                    borderRadius="lg"
                    borderWidth={1}
                    borderColor="green.900"
                    frameBorder="1"
                    src="https://coinhippo.io/coins/decentralized-finance-defi?view=widget&n=10&theme=dark"
                />
                
            </SimpleGrid>
        </div>
    )
}

export default Exchanges
