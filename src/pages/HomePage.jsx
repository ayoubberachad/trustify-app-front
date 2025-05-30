import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Select,
  Input,
  HStack, 
  Image,
  Flex,
  chakra,
} from "@chakra-ui/react";
import Header from "../components/Header";
import CategoryCarousel from "../components/CategoryCarousel";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* Hero Section with background image */}
      <Box
        as="section"
        bgImage="url('/assets/img/hero/hero-bg-1.png')"
        bgSize="cover"
        bgPosition="center"
        py={{ base: 10, md: 20 }}
        color="white"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", xl: "row" }}
            justify="space-between"
            align="center"
            gap={10}
          >
            {/* Left Column */}
            <Box maxW="xl">
              <Heading as="h1" size="2xl" mb={6}>
                Recommandé par,{" "}
                <chakra.span color="#22be0d">Trustify</chakra.span> approuvé par
                vous.
              </Heading>

              {/* Form */}
              <Box
                bg="white"
                borderRadius="md"
                p={4}
                mt={8}
                display="flex"
                position="relative"
              >
                <Select
                  placeholder="All Categories"
                  maxW="200px"
                  mr={2}
                  boxShadow="none"
                >
                  <option value="1">Animation</option>
                  <option value="2">Web Design</option>
                  <option value="3">Graphics</option>
                </Select>
                <Input
                  placeholder="Search for any service..."
                  boxShadow="none"
                  mr={2}
                />
                <Button
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  bg="#22be0d"
                  color="white"
                  _hover={{ bg: "white", color: "#22be0d", border: "1px solid #22be0d" }}
                >
                  Search
                </Button>
              </Box>

              {/* Stats */}
              <Flex
                mt={10}
                gap={10}
                wrap="wrap"
                align="center"
                justify="flex-start"
              >
                <Flex align="center" gap={4}>
                  <HStack spacing={-2}>
                    <Image src="/assets/img/hero/gp-1.png" boxSize="40px" />
                    <Image src="/assets/img/hero/gp-2.png" boxSize="40px" />
                    <Image src="/assets/img/hero/gp-3.png" boxSize="40px" />
                  </HStack>
                  <Box>
                    <Heading size="md" color="white">
                      39M+
                    </Heading>
                    <Text color="white">Happy Customers</Text>
                  </Box>
                </Flex>
                <Box>
                  <Heading size="md" color="white">
                    4.9
                  </Heading>
                  <Image src="/assets/img/hero/stars.svg" h="5" />
                </Box>
              </Flex>
            </Box>

            {/* Right Column */}
            <Box>
              <Image
                src="/assets/img/hero/big-b.png"
                alt="Hero Image"
                maxW="500px"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
<CategoryCarousel></CategoryCarousel>
       {/* Optional: Other content */}
      <Box p={8}>
        <Heading mb={4}>Bienvenue</Heading>
        <Text fontSize="lg" mb={4}>
          Ceci est une page d'accueil avec Chakra UI.
        </Text>
        <Button variant="secondaryLg">Clique ici</Button>
      </Box>
    </>
  );
};

export default HomePage;
