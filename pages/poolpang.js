/* eslint-disable react/no-children-prop */
import React from "react";
import {
  Box,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Drawer,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiToken } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdGeneratingTokens } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { FooterPage, PoolPang } from "../components";

export default function Swibc() {
  const sidebar = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const hoverColor = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && <Icon mr="2" boxSize="4" _groupHover={hoverColor} as={icon} />}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("green.700", "green.900")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          DashDeX
        </Text>
      </Flex>
      <Flex
        borderColor="green.900"
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          color={useColorModeValue("inherit", "green.300")}
          icon={AiOutlineDashboard}
        >
          <Link href={"/"}>DASHBOARD</Link>
        </NavItem>
        <NavItem
          color={useColorModeValue("inherit", "green.300")}
          icon={MdGeneratingTokens}
        >
          <Link href={"poolsushi"}>POOLS</Link>
        </NavItem>
        <NavItem
          color={useColorModeValue("inherit", "green.300")}
          icon={GiToken}
        >
          <Link href={"tokensushi"}>TOKENS</Link>
        </NavItem>
        <NavItem
          color={useColorModeValue("inherit", "green.300")}
          icon={BsCurrencyExchange}
        >
          <Link href={"exchanges"}>EXCHANGES</Link>
        </NavItem>
        <NavItem
          color={useColorModeValue("inherit", "green.300")}
          icon={FcAbout}
        >
          <Link href={"about"}>ABOUT</Link>
        </NavItem>
      </Flex>
    </Box>
  );
  return (
    <Box
      borderColor="blue.300"
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          position="sticky"
          as="nav"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("green.700", "green.900")}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500" children={<FiSearch />} />
            <Input
              borderColor="green.900"
              borderRadius="full"
              placeholder="Search..."
            />
          </InputGroup>

          <Flex align="center">
            <IconButton
              borderRadius="lg"
              borderWidth={3}
              borderColor="green.900"
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Flex>
        </Flex>

        {/* Content below  */}
        <Box bg={useColorModeValue("white", "gray.900")} as="main" p="4">
          <PoolPang />
        </Box>
      </Box>
      <FooterPage />
    </Box>
  );
}
