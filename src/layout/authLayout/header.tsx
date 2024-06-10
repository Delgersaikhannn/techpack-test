import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const AuthHeader = () => {
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      minH="75px"
      py="16px"
      px="32px"
    >
      <Box>
        <Link href="/">
          <IconButton
            icon={<HiOutlineArrowLeft />}
            aria-label="back"
            variant="icon"
          />
        </Link>
      </Box>
      {/* <Image src="/assets/logo.svg" w="150px" /> */}
    </HStack>
  );
};
export default AuthHeader;
