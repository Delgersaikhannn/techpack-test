import FormInput from "@/components/common/formInput";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import LoginForm from "./loginForm";
import OR from "./or";
import GoogleButton from "@/components/auth/googleButton";
import FbButton from "@/components/auth/fbButton";
import Link from "next/link";

const LoginDomain = () => {
  const a = 1;

  return (
    <VStack spacing="0" w="390px" px="16px" className="fade-in">
      <Text
        color="text.dark"
        fontSize={"24px"}
        fontWeight={700}
        pb="32px"
        w="100%"
      >
        Нэвтрэх
      </Text>
      <LoginForm />
      {/* <VStack w="100%" spacing="0">
        <OR />
        <HStack w="100%" spacing="8px">
          <GoogleButton />
          <FbButton />
        </HStack>
      </VStack> */}
      <Box w="100%" pt="46px" display="flex" justifyContent="center">
        <Link href="/auth/signup">
          <Text color="neutral.700" fontSize="14px" textDecor="underline">
            Та хаяггүй бол бүртгэл үүсгэнэ үү.
          </Text>
        </Link>
      </Box>
    </VStack>
  );
};

export default LoginDomain;
