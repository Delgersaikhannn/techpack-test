// import AuthHeader from "@/domains/auth/authHeader";
import { Box, Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { HiOutlinePlay } from "react-icons/hi2";
import AuthHeader from "./header";

const AuthLayout = (props: PropsWithChildren) => {
  const { children, ...rest } = props;

  return (
    <HStack {...rest} minH="100svh" w="100%" alignItems="stretch" spacing={0}>
      <VStack flex={1} spacing={0} bg="text.white">
        <AuthHeader />

        <Center w="100%" flexGrow={1}>
          {children}
        </Center>
      </VStack>
      <VStack
        flex={1}
        bg="black"
        bgSize="cover"
        bgPos="left"
        display={["none", null, "flex", null]}
      >
        <VStack
          w="100%"
          h="100%"
          justifyContent="flex-end"
          spacing="16px"
          alignItems="flex-start"
          p="40px"
        ></VStack>
      </VStack>
    </HStack>
  );
};

export default AuthLayout;
