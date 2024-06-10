import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import AppMenus from "./header.appMenus";
import UserMenus from "./header.userMenus copy";
import HeaderNavs from "./header.navs";

const AppHeader = () => {
  return (
    <VStack w="100%" spacing="0">
      <HStack
        w="100%"
        justifyContent="space-between"
        minH="75px"
        py="16px"
        px="32px"
      >
        <Box>
          <AppMenus />
        </Box>

        <UserMenus />
      </HStack>
    </VStack>
  );
};
export default AppHeader;
