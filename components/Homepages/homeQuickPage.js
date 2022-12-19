import React from "react";
// Chakra import
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Link,
} from "@chakra-ui/react";
// Components import
import Health from "../Health";
import EcosystemQuick from "../Ecosystem/EcosystemQuick";

const HomeQuick = () => {
  return (
    <div>
      <Box paddingBottom="5">
        <Menu>
          <MenuButton
            as={Button}
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
              <Link href={"homesushi"}>Sushiswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKIOOAwtjg8KA2YjlWOfRkP1qVVUfz51KGBlJrbRdCP1Ca-SYy5Ef7nRDHgOgN0DszuE&usqp=CAU"
                alt=""
                mr="12px"
              />
              <Link href={"homequick"}>Qiuckswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-F9CiUlLJdNkfMNT7AQ5a_0aO1F6yQkZzAYB3KBo5QSLRmK6oWWk7xa5OKxtgR5PDCY&usqp=CAU"
                alt=""
                mr="12px"
              />
              <Link href={"homepang"}>Pangolin</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://assets.coingecko.com/coins/images/15223/large/logo_200x200.png?1621992076"
                alt=""
                mr="12px"
              />
              <Link href={"homespooky"}>Spookyswap</Link>
            </MenuItem>
            <MenuItem minH="40px">
              <Avatar
                src="https://assets.coingecko.com/coins/images/15118/large/token-icon_m.png?1660609477"
                alt=""
                mr="12px"
              />
              <Link href={"homespirit"}>Spiritswap</Link>
            </MenuItem>
          </MenuList>
        </Menu>

        <Text fontWeight="bold" fontSize="xl">
          DASHBOARD
        </Text>
        <Text fontWeight="light" as="h6" color="gray.500">
          OVERVIEW
        </Text>
      </Box>
      <Health />
      <EcosystemQuick />
    </div>
  );
};

export default HomeQuick;
