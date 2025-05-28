import React from 'react';
import { Box, Flex, Image, Link, Menu, MenuButton, MenuList, MenuItem, Button, Select, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box as="header" bg="" px={4} py={2}>
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        <Link href="index.html">
        <Image  src="/assets/img/logo/logo-light.svg" alt="Logo" height={10} width={140}/>

          </Link> 

        <Flex align="center" gap={6}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
              Home
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="index.html">Home Main</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
              Services
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="freelancers.html">Services</MenuItem>
              <MenuItem as="a" href="freelancer-details.html">Services Details</MenuItem>
            </MenuList>
          </Menu>

          <Link href="about.html" color="black">About Us</Link>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
              Pages
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="services.html">Services</MenuItem>
              <MenuItem as="a" href="job-posts.html">Job Posts</MenuItem>
              {/* Ajoute ici les autres liens... */}
            </MenuList>
          </Menu>

          <Link href="contact.html" color="black">Contact</Link>
        </Flex>

        <Flex align="center" gap={4}>
          <Select variant="unstyled" width="auto" color="black">
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </Select>
 
          <Button variant="secondaryLg">Login</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;


