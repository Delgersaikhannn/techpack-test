import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";
// import AppMenus from "./header.appMenus";
// import UserMenus from "./header.userMenus copy";
// import HeaderNavs from "./header.navs";

const UserLayoutHeader = () => {
  return (
    <VStack w="100%" spacing="0" borderBottom="1px solid" borderColor="#DAE3E5">
      <HStack
        w="100%"
        justifyContent="space-between"
        minH="75px"
        py="16px"
        px="32px"
      >
        <Link href="/">
          <Box>
            <HiOutlineArrowLeft />
          </Box>
        </Link>
        {/* <Image src="/assets/logo.svg" w="150px" /> */}
        {/* <UserMenus /> */}
        <Box> </Box>
      </HStack>
      {/* <HeaderNavs /> */}
    </VStack>
  );
};
export default UserLayoutHeader;
