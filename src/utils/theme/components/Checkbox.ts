import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    color: "neutral.700",
    fontSize: "14px",
  },
  control: {
    boxSize: "20px",
    borderRadius: "4px",
    _checked: {
      bg: "primary.blue.600",
      border: "none",
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
