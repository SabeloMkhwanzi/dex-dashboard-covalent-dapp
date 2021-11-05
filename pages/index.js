// components imports
import Sidebar from '../components/Sidebar/Siderbar';
import Footers from '../components/Footer/Footers';

// Chakra imports
import { Box } from '@chakra-ui/layout'

export default function Home() {
  return (
    <Box>
      <Sidebar />
      <Footers />
    </Box>
  )
}
