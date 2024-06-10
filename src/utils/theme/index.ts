import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { inputTheme } from "./components/Input";
import { checkboxTheme } from "./components/Checkbox";
import { buttonTheme } from "./components/Button";
import { menuTheme } from "./components/Menu";
import { stepperTheme } from "./components/Stepper";

const space = {
  sm: "6px",
  xl: "16px",
};

const components = {
  Input: inputTheme,
  Checkbox: checkboxTheme,
  Button: buttonTheme,
  Menu: menuTheme,
  Stepper: stepperTheme,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  components,
  space,
});

export default theme;
