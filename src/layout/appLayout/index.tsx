import { Center, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import AppHeader from "./header";
import HomeModals from "./modals";

const AppLayout = (props: PropsWithChildren) => {
  const { children, ...rest } = props;

  return (
    <VStack minH="100vh" w="100%" {...rest}>
      <AppHeader />
      <Center w="100%" flexGrow={1}>
        {children}
      </Center>
      <HomeModals />
    </VStack>
  );
};

export default AppLayout;
