import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {},
  list: { px: "10px", zIndex: 99 },
  item: {
    fontSize: "14px",
  },
  groupTitle: {},
  command: {},
  divider: {},
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
