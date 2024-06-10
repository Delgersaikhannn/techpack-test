import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

const SwiperCard = ({ children }: { children: ReactElement }) => {
  return (
    <Box w="100%" h="100%" bg="red">
      {children}
    </Box>
  );
};

export default SwiperCard;
