import React from 'react'
import {Container, Box, Text} from '@chakra-ui/react'

export const Card = () => {
    return (
        <div>
            <Box>
                <Container borderRadius="md" >
                    <Text>Market Cap{}</Text>
                    <Text>{}</Text>
                </Container>
            </Box>
        </div>
    )
}
