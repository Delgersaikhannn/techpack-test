import { Text, VStack } from "@chakra-ui/react";
import RecoveryForm from "./recoveryForm";
// import ForgotForm from "./forgotForm";

const PasswordChangePage = () => {
  //   const;
  return (
    <VStack
      w="100%"
      px={["20px", null, "106px", null]}
      alignItems="flex-start"
      spacing={0}
      className="fade-in"
    >
      <RecoveryForm />
    </VStack>
  );
};
export default PasswordChangePage;
