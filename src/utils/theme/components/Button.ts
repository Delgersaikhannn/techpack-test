import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  color: "text.white",
  bg: "black",
  borderRadius: "8px",
  _hover: {},
});

const subtle = defineStyle({
  color: "#1F2937",
  bg: "neutral.100",
  border: "1px solid",
  borderColor: "neutral.300",
  borderRadius: "8px",
  _hover: {},
});

const ghost = defineStyle({
  color: "primary.blue.500",
  bg: "transparent",
  borderRadius: "8px",
  _hover: {},
});

const icon = defineStyle({
  color: "text.dark",
  bg: "transparent",
  borderRadius: "8px",
  fontWeight: "500",
  strokeWidth: "2px",
  fontSize: "24px",
  _hover: {
    transform: "scale(1.1)",
  },
  minH: "24px",
  maxH: "24px",
  minW: "24px",
  maxW: "24px",
});

const icon_noAnim = defineStyle({
  color: "text.dark",
  bg: "transparent",
  borderRadius: "8px",
  fontWeight: "500",
  strokeWidth: "2px",
  fontSize: "24px",
  _hover: {},
  minH: "24px",
  maxH: "24px",
  minW: "24px",
  maxW: "24px",
});

const white = defineStyle({
  color: "primary.blue.500",
  bg: "text.white",
  border: "1px solid",
  borderColor: "neutral.200",
  borderRadius: "8px",
  _hover: {},
});

const sm = defineStyle({
  fontSize: "14px",
  minH: "22px",
  minW: "28px",
  h: "28px",
  px: "6px",
  py: "2px",
});
const md = defineStyle({
  fontSize: "16px",
  minH: "48px",
  px: "16px",
  py: "12px",
  fontWeight: 500,
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    subtle,
    white,
    ghost,
    icon,
    icon_noAnim,
  },
  sizes: {
    sm,
    md,
  },
});
