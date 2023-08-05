import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Logo from "../assets/112.svg";
import { useLocation } from "react-router-dom";

const withouSidebarRoutes = ["/contact"];

const SocialButton = ({ children, label, href }) => {
  const { pathname } = useLocation();

  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const Footer = () => {
  return <div>Footer</div>;
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      m={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Link to="/">
              <Flex verticalAlign={"baseLine"}>
                <Image src={Logo} width="2em" alt="" />

                <Box mt={"auto"} ml={2}>
                  <Text
                    textDecoration={"none"}
                    lineHeight={0.8}
                    letterSpacing={-1}
                    fontFamily={"roboto"}
                    fontSize={24}
                    fontWeight={900}
                  >
                    MERCADO
                  </Text>
                  <Text
                    textDecoration={"none"}
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
            <Text fontSize={"sm"} fontWeight={600}>
              © 2022 Mercado Digital Creative Agency. <br />
              All rights reserved
            </Text>
            <Stack direction={"row"} spacing={2}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"LinkedIn"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Our Staff</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Subscribe to our newsletter</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                colorScheme="teal"
                color={useColorModeValue("white", "gray.800")}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
