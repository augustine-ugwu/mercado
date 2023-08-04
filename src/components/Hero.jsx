import { Box, HStack, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import BgVideo from "../assets/99293.mp4";
import thumbnail from "../assets/thumbnail.jpg";
import styles from "./index.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box className={styles.showcase}>
        <video src={BgVideo} muted loop autoPlay poster={thumbnail}></video>
        <Box
          width={{ base: "full", sm: "lg", lg: "xl" }}
          margin={"auto"}
          className={styles.text}
          maxW={{ base: "xl", md: "3xl" }}
        >
          <Heading
            textAlign={"center"}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="linear"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              fontWeight={800}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: 1,
              }}
            >
              Growing Your
            </Text>
            <br />
            <Text as={"span"} color={"#D40203"} fontWeight={800}>
              Business For You!
            </Text>
          </Heading>
          <Text
            fontWeight={400}
            textAlign={"center"}
            pt={2}
            pb={4}
            fontSize={{ base: 16, sm: 18 }}
          >
            We act as a dedicated team to help organizations and small
            businesses attract, convert and nurture appropriate audiences using
            the digital space. Whether it's branding or digital strategy, our
            mission is to create positive change for our partners, both local
            and international.
          </Text>

          <HStack margin={"auto"} justifyContent={"center"} spacing={4} py={2}>
            <Link to="/about">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="solid"
                fontWeight={700}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                rightIcon={<EmailIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight={700}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
