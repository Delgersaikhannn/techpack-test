import { Box, Button, Image, Text, VStack, useToken } from "@chakra-ui/react";
import CheckItem from "./checkItem";
import { useRouter } from "next/router";
import { UserStartProps } from "..";

const checks = [
  {
    title: "Хувийн мэдээлэл",
    desc: "Захиалга хийхэд шаардлагатай мэдээллүүдийг авах болно.",
  },
  {
    title: "Хаягийн мэдээлэл",
    desc: "Хүргэлт хийлгэх хаягийн мэдээллээ оруулаарай. ",
  },
  {
    title: "Skin Quiz",
    desc: "Таны арьсны төрөл болон танд санал болгох бүтээгдэхүүн олоход туслаарай !",
  },
];

const StartPage = ({ setStep, step }: UserStartProps) => {
  const [s600] = useToken("colors", ["secondary.600"]);
  const router = useRouter();

  const onNext = () => {
    setStep(step + 1);
  };
  const onDecline = () => {
    router.push("/");
  };
  return (
    <VStack w="100%" spacing="0">
      <VStack w="100%" pb="52px">
        {/* <Image src="/assets/user_start.png" /> */}
        <Text
          color="neutral.500"
          textAlign="center"
          fontWeight={400}
          fontSize="14px"
          w="100%"
        >
          Та бүртгэлээ ердөө 5 минутад баталгаажуулан{" "}
          <span style={{ color: s600 }}>1500</span> лояалти оноо цуглуулаарай.
        </Text>
      </VStack>
      <VStack pos="relative">
        <VStack w="100%" spacing="24px">
          {checks?.map((e) => (
            <CheckItem {...e} key={e.title} />
          ))}
        </VStack>
        <Box
          pos="absolute"
          w="1px"
          h="calc(100% - 30px)"
          top="0"
          left="15px"
          bg="neutral.400"
          zIndex={0}
        />
      </VStack>
      <VStack pt="48px" w="100%" spacing="14px">
        <Button variant="primary" w="80%" fontSize="14px" onClick={onNext}>
          Эхэлцгээе
        </Button>
        <Button variant="ghost" w="80%" fontSize="14px" onClick={onDecline}>
          Алгасах
        </Button>
      </VStack>
    </VStack>
  );
};

export default StartPage;
