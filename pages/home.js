import React from 'react'
// Chakra import
import { Box, Text, Button, Link, Avatar, Select, Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
// Components import
import Health from '../components/Health/Health' 
import Ecosystem from '../components/Ecosystem/Ecosystem'

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
                <Link href={'SiderbarSushi'}>Sushiswap</Link>
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKIOOAwtjg8KA2YjlWOfRkP1qVVUfz51KGBlJrbRdCP1Ca-SYy5Ef7nRDHgOgN0DszuE&usqp=CAU"
                    alt=""
                    mr="12px"
                />
                <Link href={'SiderbarQuick'}>Quickswap</Link>
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-F9CiUlLJdNkfMNT7AQ5a_0aO1F6yQkZzAYB3KBo5QSLRmK6oWWk7xa5OKxtgR5PDCY&usqp=CAU"
                    alt=""
                    mr="12px"
                />
                 <Link href={'SiderbarPang'}>Pangolin</Link>
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://assets.coingecko.com/coins/images/15223/large/logo_200x200.png?1621992076"
                    alt=""
                    mr="12px"
                />
                <Link href={'SiderbarSpooky'}>Spookyswap</Link>
                </MenuItem>
                <MenuItem minH="40px">
                <Avatar
                    src="https://www.spiritswap.finance/assets/imgs/spiritswap_logo_xl.png"
                    alt=""
                    mr="12px"
                />
                <Link href={'SiderbarSpirit'}>Spiritswap</Link>
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
             <Ecosystem /> 
        </div>


    )
}

export default Home;
