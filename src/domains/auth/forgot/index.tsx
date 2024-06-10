import { Text, VStack } from "@chakra-ui/react";
import ForgotForm from "./forgotForm";
import { useState } from "react";

const ForgotPassPage = () => {
  const [hasSuccess, setHasSuccess] = useState(false);
  //   const;

  return (
    <>
      {" "}
      {hasSuccess ? (
        <>
          <VStack
            w="100%"
            px={["20px", null, "106px", null]}
            alignItems="flex-start"
            spacing={0}
            className="fade-in"
          >
            <Text fontWeight={700} fontSize="24px" color="text.dark" pb="42px">
              Нууц үг солих мэйл амжилттай илгээлээ!
            </Text>
            <Text color="#57696C" fontSize="12x" lineHeight={1.5}>
              Та энэ таб-ыг одоо хааж болно.
            </Text>
          </VStack>
        </>
      ) : (
        <VStack
          w="100%"
          px={["20px", null, "106px", null]}
          alignItems="flex-start"
          spacing={0}
          className="fade-in"
        >
          <Text fontWeight={700} fontSize="24px" color="text.dark" pb="42px">
            Нууц үгээ мартсан уу ?{" "}
          </Text>
          <Text color="#57696C" fontSize="14x" lineHeight={1.5}>
            Санаа зоволтгүй ээ. Бид таны и-мэйл хаяг руу нууц үг шинэчлэх
            линкийг илгээх болно.
          </Text>
          <ForgotForm setHasSuccess={setHasSuccess} />
        </VStack>
      )}
    </>
  );
};
export default ForgotPassPage;
