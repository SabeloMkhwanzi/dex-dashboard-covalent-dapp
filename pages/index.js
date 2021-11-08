// components imports

import Footers from '../components/Footer/Footers';
import Siderbar from '../components/Siderbar/Siderbar'

// Chakra imports
import { Box } from '@chakra-ui/layout'

export default function Home() {
  return (
    <Box>
       <Siderbar /> 
      <Footers />
    </Box>
  )
}

