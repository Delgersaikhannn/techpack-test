import { VStack } from "@chakra-ui/react";
import StartPage from "./startPage";
import { Dispatch, SetStateAction } from "react";

export type UserStartProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const UserStart = (props: UserStartProps) => {
  return (
    <VStack w="100%">
      <StartPage {...props} />
    </VStack>
  );
};

export default UserStart;
