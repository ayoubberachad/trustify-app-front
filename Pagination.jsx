import React from "react";
import { HStack, Button} from "@chakra-ui/react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <HStack
  spacing={4}
  justify="center"
  align="center"
  py={4}
  w="100%"
>

      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Previous
      </Button>

      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          borderRadius="full"
          borderWidth="1px"
          bg={number === currentPage ? "#22be0d" : "white"}
          color={number === currentPage ? "white" : "gray.800"}
          _hover={{
            bg: number === currentPage ? "#22be0d" : "gray.100",
          }}
        >
          {number}
        </Button>
      ))}

      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
