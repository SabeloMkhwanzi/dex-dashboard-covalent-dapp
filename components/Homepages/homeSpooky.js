import React from 'react'
// Chakra import
import { Box, Text, Button,  Menu, MenuButton, MenuList, MenuItem, Avatar, Link } from '@chakra-ui/react'
// Components import
import Health from '../Health/health' 
import Ecosystemspooky from '../Ecosystem/ecosystemspooky'


const Home = () => {
    return (

        
        <div>
            <Box
            paddingBottom="5"
            >
                <Menu>
            <MenuButton as={Button}
                maxW="150px"
                fontWeight="bold"
                float="right"
                borderColor="blackAlpha.900"
                bg="green.700"
            >
                Select Dex
            </MenuButton>
            <MenuList>
                <MenuItem minH="48px">
                <Avatar
                    
                    src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png"
                    alt=""
                    mr="12px"
                />
<<<<<<< HEAD
                <Link href={'homesushi'}>Sushiswap</Link>
=======
                <Link href={'siderbarSushi'}>Sushiswap</Link>
>>>>>>> fc9bef22e83f52752ef42b0c8411e2835b61688e
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKIOOAwtjg8KA2YjlWOfRkP1qVVUfz51KGBlJrbRdCP1Ca-SYy5Ef7nRDHgOgN0DszuE&usqp=CAU"   
                    alt=""
                    mr="12px"
                />
<<<<<<< HEAD
                <Link href={'homequick'}>Quickswap</Link>
=======
                <Link href={'siderbarQuick'}>Quickswap</Link>
>>>>>>> fc9bef22e83f52752ef42b0c8411e2835b61688e
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-F9CiUlLJdNkfMNT7AQ5a_0aO1F6yQkZzAYB3KBo5QSLRmK6oWWk7xa5OKxtgR5PDCY&usqp=CAU"
                    alt=""
                    mr="12px"
                />
<<<<<<< HEAD
                 <Link href={'homepang'}>Pangolin</Link>
=======
                 <Link href={'siderbarPang'}>Pangolin</Link>
>>>>>>> fc9bef22e83f52752ef42b0c8411e2835b61688e
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://assets.coingecko.com/coins/images/15223/large/logo_200x200.png?1621992076"
                    alt=""
                    mr="12px"
                />
<<<<<<< HEAD
                <Link href={'homespooky'}>Spookyswap</Link>
=======
                <Link href={'siderbarSpooky'}>Spookyswap</Link>
>>>>>>> fc9bef22e83f52752ef42b0c8411e2835b61688e
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://www.spiritswap.finance/assets/imgs/spiritswap_logo_xl.png"
                    alt=""
                    mr="12px"
                />
<<<<<<< HEAD
                <Link href={'homespirit'}>Spiritswap</Link>
=======
                <Link href={'siderbarSpirit'}>Spiritswap</Link>
>>>>>>> fc9bef22e83f52752ef42b0c8411e2835b61688e
                </MenuItem>
            </MenuList>
            </Menu>
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
             <Ecosystemspooky /> 

        </div>


    )
}

export default Home;
