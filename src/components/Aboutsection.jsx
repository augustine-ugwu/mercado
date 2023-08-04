import {
  Box,
  Container,
  Flex,
  Image,
  Img,
  Stack,
  Card,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Img1 from "../assets/1545.jpg";
import styles from "./index.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Aboutsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        m={{ base: "1em", md: 10, lg: 16 }}
      >
        <Card
          data-aos="fade-up"
          data-aos-duration="2000"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          border={"none"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "20em", md: "50em" }}
            src={Img1}
            alt="Shipping Vessel"
          />

          <Stack>
            <CardBody p={{ base: 4, md: 10 }}>
              <Heading size="lg">Brief About Us</Heading>
              <Text py="2">
                We are a dedicated team committed to assisting organizations and
                small businesses in leveraging the power of the digital space to
                attract, convert, and nurture their target audiences. With
                expertise in branding and digital strategy, our mission is to
                drive positive change for our partners, be it at a local or
                international level. At our core, we believe in the
                transformative potential of effective digital marketing. In
                today's fast-paced and interconnected world, establishing a
                strong online presence is crucial for success. That's where we
                come in. By harnessing our collective knowledge and skills, we
                work closely with our clients to develop tailored strategies
                that align with their unique goals and objectives. Our team
                understands the ever-evolving digital landscape and keeps up
                with the latest trends, technologies, and best practices.
                Whether it's crafting compelling brand identities, designing
                engaging websites, implementing targeted advertising campaigns,
                or optimizing online visibility through search engine
                optimization (SEO), we offer a comprehensive range of services
                to meet our clients' diverse needs. What sets us apart is our
                unwavering dedication to creating meaningful and impactful
                change. We strive to deliver measurable results and ensure that
                our clients achieve a competitive edge in their respective
                industries. By adopting a collaborative approach, we build
                long-lasting partnerships based on trust, transparency, and
                mutual growth. No matter the size or nature of your business, we
                are here to help you navigate the digital landscape and achieve
                your goals. Join us on this journey as we leverage the limitless
                opportunities offered by the digital world to drive your
                success.
              </Text>
            </CardBody>

            <CardFooter p={{ base: 4, md: 10 }}>
              <Link to="/about">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Learn More About Us
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Aboutsection;
