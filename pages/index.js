// components imports

import Footers from '../components/Footer/Footers';
import Siderbar from '../components/Siderbar/siderbar'

// Chakra imports
import { Box } from '@chakra-ui/layout'

export default function Home() {
  return (
    <Box>
      <head>
          <title>DashDEX - DeX Dashboard</title>
          <meta name="description" content="DEX Dashboard" />
      </head>
       <Siderbar /> 
      <Footers />
    </Box>
  )
}

