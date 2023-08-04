import {
  Box,
  SimpleGrid,
  Text,
  CardFooter,
  Button,
  CardBody,
  Card,
  Stack,
  chakra,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import paperplane from "../assets/paperplane.svg";
import gear from "../assets/gear.svg";
import lightbuld from "../assets/lightbulb.svg";

// importing aos
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Feature = ({ title, text, src, buttontext }) => {
  return (
    <>
      <Container py={2}>
        <Stack>
          <Flex
            w={14}
            h={14}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            mb={1}
          >
            {src}
          </Flex>
          <Flex>
            <Text display={"flex"} fontWeight={700}>
              {title}
            </Text>
          </Flex>

          <Text>{text}</Text>
        </Stack>
      </Container>
    </>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="2000"
      bg={useColorModeValue("white", "gray.800")}
      p={{ base: 4, md: 10, lg: 24 }}
    >
      <Box
        width={{ base: "full", sm: "lg", lg: "xl" }}
        fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
        margin={"auto"}
        pb={2}
      >
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={24}
          textTransform={"uppercase"}
          color={useColorModeValue("gray.700", "gray.50")}
          textAlign="center"
          pb={10}
        >
          We do what we do best
        </chakra.h3>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          src={<img src={gear} alt={"Branding Design"} w={10} h={10} />}
          title={"Branding Design"}
          text={
            "Here at Mercado, we believe that your brand is more than just a logo. We know it builds trusts with your audience and creates an entry point into your mission and story."
          }
          buttontext={"Learn More"}
        />
        <Feature
          src={
            <img src={lightbuld} alt={"Technology Solution"} w={10} h={10} />
          }
          title={"Technology Solution"}
          text={
            "We are an agency that embraces the crossroads of technology, design, content and digital strategy. We embrace hard problems and creative challenges for clients. Mercado's process is data-driven, highly-iterative and cuts through the clutter that burdens many organizations."
          }
          buttontext={"Learn More"}
        />
        <Feature
          src={
            <img
              src={paperplane}
              alt={"Business Solutions"}
              color="white"
              w={10}
              h={10}
            />
          }
          title={"Business Solutions"}
          text={
            "From brand strategies and advertising campaigns to digital tactics and marketing plans, driven by creativity and developed in close collaboration with our partners. By getting the right audience, we can help you build connections and create lasting change."
          }
          buttontext={"Learn More"}
        />
      </SimpleGrid>
    </Box>
  );
}
