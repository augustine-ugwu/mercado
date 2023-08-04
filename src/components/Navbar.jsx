import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  HStack,
  Button,
  Text,
  useColorMode,
  useDisclosure,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/112.svg";
import styles from "../components/navbar.module.css";

// All the routes excluded
const withouSidebarRoutes = ["/signup", "/login"];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const { pathname } = useLocation();

  // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
  // If that's true render null instead of the sidebar

  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <Box boxShadow={"base"} className={styles.navbar}>
      <Flex
        backdropFilter="saturate(180%) blur(10px)"
        as="header"
        px={{ base: 4 }}
        height="16"
        width="100vw"
        alignItems="center"
        justifyContent={{ base: "flex-end" }}
      >
        <Box mr={"auto"} ml={{ base: "1em", md: "2em", lg: "4em" }}>
          <Link to="/">
            <Flex verticalAlign={"baseLine"}>
              <img src={Logo} width="40em" alt="" />

              <Box mt={"auto"} ml={2}>
                <Text
                  lineHeight={0.8}
                  letterSpacing={-1}
                  fontFamily={"roboto"}
                  fontSize={24}
                  fontWeight={900}
                >
                  MERCADO
                </Text>
                <Text
                  lineHeight={0.8}
                  fontFamily={"roboto"}
                  fontSize={10}
                  fontWeight={700}
                >
                  Digital Creative Agency
                </Text>
              </Box>
            </Flex>
          </Link>
        </Box>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={20}>
            <DesktopNav />
          </Flex>
        </Flex>
        <HStack spacing={{ base: "2", md: "6" }}>
          <Button variant={"unstyled"} onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "gray.200");
  const popoverContentBgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Stack direction={"row"} spacing={8} fontWeight={600}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.to ?? "#"}
                fontSize={"sm"}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Link
      to={to}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#D40203", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#D40203" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#D40203"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.900")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        to: "/about",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        to: "/about",
      },
    ],
  },
  {
    label: "Our Services",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        to: "/services",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        to: "/services",
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Hire",
    to: "/hire",
  },
];

export default Navbar;
