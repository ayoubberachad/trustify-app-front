
import React from 'react';
import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
 import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const categories = [
  {
    title: "Restaurant",
    count: "+1,000 restaurants",
    image: "/assets/img/categories/1.svg",
  },
  {
    title: "Café",
    count: "+500 cafés",
    image: "/assets/img/categories/2.svg",
  },
  {
    title: "Sociétés",
    count: "399 Services",
    image: "/assets/img/categories/3.svg",
  },
  {
    title: "Hôtels",
    count: "+300 hébergements",
    image: "/assets/img/categories/4.svg",
  },
  {
    title: "Tourisme & culture",
    count: "850 Lieux",
    image: "/assets/img/categories/5.svg",
  },
  {
    title: "Artisan qualifié",
    count: "3,560 Expert",
    image: "/assets/img/categories/6.svg",
  },
  {
    title: "Sales & Marketing",
    count: "850 Skills",
    image: "/assets/img/categories/5.svg",
  },
];

const CategoryCard = ({ title, count, image }) => (
  <Box bg="white" borderRadius="xl" p={5} textAlign="center" boxShadow="md">
    <Image src={image} alt={title} mb={4} mx="auto" />
    <Text fontWeight="semibold" fontSize="lg">{title}</Text>
    <Text fontSize="sm" color="gray.600">{count}</Text>
  </Box>
);

const CategoryCarousel = () => {
  return (
    <Box bg="gray.50" py={28}>
      <Container maxW="8xl">
        <Flex justify="space-between" align="end" mb={10} wrap="wrap" gap={4}>
          <Box>
            <Heading size="lg" mb={2}>Que cherchez-vous ?</Heading>
            <Text fontSize="md" color="gray.600">Faites votre choix, on vous recommande le meilleur..</Text>
          </Box>
          <Flex gap={3}>
            <Button className="swiper-prev" leftIcon={<ChevronLeftIcon />} variant="outline" />
            <Button className="swiper-next" rightIcon={<ChevronRightIcon />} variant="outline" />
          </Flex>
        </Flex>

        {/* First carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <CategoryCard {...cat} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second carousel - duplicate */}
        <Box mt={10}>
          <Swiper
            modules={[Navigation]}
            navigation={false}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={`second-${index}`}>
                <CategoryCard {...cat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryCarousel;
