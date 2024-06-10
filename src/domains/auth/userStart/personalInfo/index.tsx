import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { UserStartProps } from "..";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const PersonalInfo = ({ step, setStep }: UserStartProps) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <VStack w="100%">
      <Stepper index={activeStep} w="100%">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={
                  <Box boxSize="8px" borderRadius="50%" bg="#50c4d3" />
                }
                active={<Box boxSize="8px" borderRadius="50%" bg="#50c4d3" />}
              />
            </StepIndicator>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </VStack>
  );
};

export default PersonalInfo;
