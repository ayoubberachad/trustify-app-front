import React, { useState } from "react";
import {
  Box,
  Flex,
  Select,
  IconButton,
  SimpleGrid,
  Image,
  Text,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { StarIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";


import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  VStack,
} from "@chakra-ui/react";
const mockProducts = [
  {
    id: 1,
    name: "Brote - Cleaning Service Elementor",
    price: "$15",
    rating: 4.8,
    reviews: "2k",
    image: "/assets/img/services/4.png",
    author: "Nankathan",
    avatar: "https://via.placeholder.com/32",
  },
  {
    id: 2,
    name: "Nas Digital Agency Website Design",
    price: "$15",
    rating: 4.8,
    reviews: "2k",
    image: "/assets/img/services/3.png",
    author: "Nankathan",
    avatar: "https://via.placeholder.com/32",
  },
  {
    id: 3,
    name: "Quomodosoft Agency for UI/UX Agency",
    price: "$30",
    rating: 5.0,
    reviews: "1k",
    image: "/assets/img/services/1.png",
    author: "Brian Roberto",
    avatar: "https://via.placeholder.com/32",
  },
  {
    id: 4,
    name: "File Manager Cloud Storage App Design",
    price: "$15",
    rating: 4.8,
    reviews: "2k",
    image: "/assets/img/services/2.png",
    author: "Ramon Miles",
    avatar: "https://via.placeholder.com/32",
  },
  {
    id: 5,
    name: "File Manager Cloud Storage App Design",
    price: "$15",
    rating: 4.8,
    reviews: "2k",
    image: "/assets/img/services/4.png",
    author: "Ramon Miles",
    avatar: "https://via.placeholder.com/32",
  },
];

const RestaurantPage = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const navigate = useNavigate();
  return (

    <><Header />

      <Box>
        <Box
          as="section"
          className="w-breadcrumb-area"
          bgImage="url('/assets/img/common/breadcrumb-bg.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          py={16} // padding vertical
        >
          <Container maxW="container.xl">
            <Box position="relative" zIndex={2} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
              <VStack align="start" spacing={2}>
                <Heading as="h2" size="lg" color="white">
                Catégorie
                </Heading>
                <Breadcrumb color="white">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" color="white">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color="#22be0d">Resturant & Café</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </VStack>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box bg="#f7f5f0" p={6} maxW="100%" mx="auto">
        {/* Filters */}
        <Flex mb={6} wrap="wrap" gap={4} justify="space-between" align="center">
          <Flex gap={4} wrap="wrap">
            <Select bg="white" placeholder="All Categories" w="200px" />
            <Select bg="white" placeholder="Sub Categories" w="200px" />
            <Select bg="white" placeholder="Budget" w="200px" />
            <Select bg="white" placeholder="Rating" w="200px" />
          </Flex>
          <Flex align="center" gap={2}>
            <Select bg="white" defaultValue="Most Relevant" w="180px">
              <option>Most Relevant</option>
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </Select>
            <IconButton icon={<ViewIcon />} aria-label="Grid view" colorScheme="green" />
            <IconButton icon={<ViewOffIcon />} aria-label="List view" variant="outline" />
          </Flex>
        </Flex>

        {/* Product Cards */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
          {mockProducts.map((product) => (
            <Box
              bg="white"
              _hover={{ borderColor: "#22be0d" }}
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              position="relative"
            >
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Icon
                as={FaHeart}
                color="green.400"
                position="absolute"
                top={5}
                right={6}
                boxSize={5} />

              <Text color="green.500" fontWeight="bold" mt={3}>
                {product.price}
              </Text>
              <Flex align="center" gap={1} mt={1}>
                <StarIcon color="yellow.400" boxSize={4} />
                <Text fontWeight="medium">
                  {product.rating} ({product.reviews})
                </Text>
              </Flex>
              <Text fontWeight="semibold" mt={2}>
                {product.name}
              </Text>
              <Flex align="center" mt={3} gap={2}>
                <Avatar size="sm" src={product.avatar} />
                <Text>{product.author}</Text>
              </Flex>
            </Box>
          ))}
          {mockProducts.map((product) => (
            <Box
           
              bg="white"
              _hover={{ borderColor: "#22be0d" }}
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              position="relative"
            >
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Icon
                as={FaHeart}
                color="green.400"
                position="absolute"
                top={5}
                right={6}
                boxSize={5} />

              <Text color="green.500" fontWeight="bold" mt={3}>
                {product.price}
              </Text>
              <Flex  align="center" gap={1} mt={1}>
                <StarIcon color="yellow.400" boxSize={4} />
                <Text fontWeight="medium">
                  {product.rating} ({product.reviews})
                </Text>
              </Flex>
              <Text _hover="#f7f5f0" onClick={() => navigate(`/categories/restaurants_details`)} style={{ cursor: "pointer" }} fontWeight="semibold" mt={2}>
                {product.name}
              </Text>
              <Flex  align="center" mt={3} gap={2}>
                <Avatar size="sm" src={product.avatar} />
                <Text  >{product.author}</Text>
              </Flex>
            </Box>
          ))}


 


        </SimpleGrid>

        <Pagination justify="center"
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
        /></Box></>
  );
};

export default RestaurantPage;
