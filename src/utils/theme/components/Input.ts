import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const brand = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "neutral.400",
    borderRadius: "8px",
    color: "neutral.800",
    _placeholder: {
      color: "neutral.400",
      fontSize: "14px",
    },
    bg: "text.white",
    p: "12px",
    fontSize: "14px",
    _focusWithin: {
      borderColor: "blue.100",
    },
    _autofill: {
      bg: "red",
    },
    _active: {
      borderColor: "neutral.500",
    },
    minH: "48px",
  },
});

export const inputTheme = defineMultiStyleConfig({ variants: { brand } });
