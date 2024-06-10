import PasswordChangePage from "@/domains/user/passwordChange";
import UserLayout from "@/layout/userLayout";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

const PasswordChange = () => {
  return <PasswordChangePage />;
};

PasswordChange.getLayout = (page: ReactElement) => (
  <UserLayout> {page} </UserLayout>
);

export default PasswordChange;
