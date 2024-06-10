import useAuth from "@/context/authContext";
import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const EmailConfirmPage = () => {
  const { supabaseClient, user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [challenge, setChallenge] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const { query } = router;
  const toast = useToast();

  const onFinish = async (chall?: string) => {
    try {
      if (challenge.length > 6) return;
      setIsLoading(true);
      const email = searchParams.get("email");
      const res = await supabaseClient?.auth.verifyOtp({
        email: email ?? "",
        token: chall ?? challenge,
        type: "email",
      });

      if (res?.data?.user) {
        setUser(res?.data?.user);
        toast({
          description: "Email confirmed successfully.",
          status: "success",
        });
        router.push("/");
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <VStack
      className="fade-in"
      maxW="507px"
      justifyContent="center"
      alignItems="flex-start"
      spacing="20px"
      h="100%"
    >
      <Text fontSize="24px" color="black" fontWeight={700}>
        Баталгаажуулах кодоо оруулаарай{" "}
      </Text>
      <Text fontSize="14px" color="#57696C">
        Таны бүртгүүлсэн <b>{query?.email}</b> и-мэйл руу илгээсэн
        баталгаажуулах кодыг оруулна уу.
      </Text>
      {/* <Text fontSize="14px" color="#57696C">
        Дахин код авах 00:19
      </Text> */}
      <HStack w="100%" justifyContent="center" py="24px">
        <PinInput
          otp
          size="lg"
          onComplete={(e) => onFinish(e)}
          onChange={(e) => setChallenge(e)}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack w="100%" justifyContent="center">
        <Button
          variant="primary"
          minW="358px"
          isLoading={isLoading}
          onClick={() => onFinish(challenge)}
        >
          Үргэлжлүүлэх
        </Button>
      </HStack>
    </VStack>
  );
};

export default EmailConfirmPage;
