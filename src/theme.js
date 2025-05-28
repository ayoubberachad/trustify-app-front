// theme.js ou theme/index.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      secondary: "#22be0d", // ton bouton secondaire
    },
  },
  components: {
    Button: {
      variants: {
        secondaryLg: {
          bg: "brand.secondary",
          color: "white",
          fontSize: "lg",
          px: 6,
          py: 4,
          _hover: {
            bg: "white",
            color: "brand.secondary", // Texte devient vert au hover
            border: "1px solid",
            borderColor: "brand.secondary",
          },
        },
      },
    },
  },
});

export default theme;
