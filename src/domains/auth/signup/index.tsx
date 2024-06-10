import FormInput from "@/components/common/formInput";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import OR from "./or";
import GoogleButton from "@/components/auth/googleButton";
import FbButton from "@/components/auth/fbButton";
import Link from "next/link";
import SignupForm from "./signupForm";

const LoginDomain = () => {
  const a = 1;

  return (
    <VStack spacing="0" w="390px" px="16px" className="fade-in">
      <Text
        color="text.dark"
        fontSize={"24px"}
        fontWeight={700}
        w="100%"
        pb="32px"
      >
        Бүртгүүлэх
      </Text>
      <SignupForm />
      <Box w="100%" pt="46px" display="flex" justifyContent="center">
        <Link href="/auth">
          <Text color="neutral.700" fontSize="14px" textDecor="underline">
            Та бүртгэлтэй бол өөрийн хаягаар нэвтэрнэ үү.
          </Text>
        </Link>
      </Box>
    </VStack>
  );
};

export default LoginDomain;
