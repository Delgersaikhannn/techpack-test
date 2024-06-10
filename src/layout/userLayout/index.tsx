import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import UserLayoutHeader from "./header";
import UserSideBar from "./sidebar";
import useAuth from "@/context/authContext";

const UserLayout = (props: PropsWithChildren) => {
  const { user } = useAuth();
  const { children, ...rest } = props;

  return (
    <VStack minH="100vh" w="100%" {...rest} spacing={0}>
      <UserLayoutHeader />
      <>
        {user ? (
          <HStack w="100%" flex={1} alignItems="stretch">
            <UserSideBar />
            <Center w="100%" flexGrow={1} overflow="auto">
              {children}
            </Center>
          </HStack>
        ) : (
          <HStack w="100%" flex={1} alignItems="stretch">
            <Center w="100%" flexGrow={1}>
              <Text>
                Та нэвтэрч орсоны дараа өөрийн мэдээллээ засах боломжтой.
              </Text>
            </Center>
          </HStack>
        )}
      </>
      {/* <HomeModals /> */}
    </VStack>
  );
};

export default UserLayout;
