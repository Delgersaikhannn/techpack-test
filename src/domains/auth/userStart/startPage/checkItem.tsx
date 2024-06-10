import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { HiCheck, HiCheckCircle } from "react-icons/hi2";

const CheckItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <HStack w="100%" alignItems="flex-start">
      <Box
        fontSize="28.4px"
        color="neutral.400"
        p="2px"
        bg="neutral.50"
        borderRadius="50%"
        zIndex={1}
      >
        <HiCheckCircle />
      </Box>
      <VStack alignItems="flex-start" color="text.dark" spacing="2px">
        <Text fontSize="14px" fontWeight={600}>
          {title}
        </Text>
        <Text fontSize="12px">{desc}</Text>
      </VStack>
    </HStack>
  );
};

export default CheckItem;
