import {
  Collapse,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";

type FormInputProps = {
  label: string;
  type?: string;
  name: string;
  register: any;
  required: boolean;
  error?: any;
  defaultValue?: string;
  placeholder?: string;
  LeftIcon?: any;
};

const FormInput = ({
  label,
  type = "text",
  register,
  name,
  required,
  error,
  defaultValue,
  placeholder,
  LeftIcon,
}: FormInputProps) => {
  return (
    <VStack w="100%" spacing="4px">
      <Text w="100%" color="neutral.700" fontWeight={400} fontSize="14px">
        {label}
      </Text>
      <InputGroup w="100%">
        {LeftIcon ? (
          <InputLeftElement
            minW="20px"
            h="100%"
            color="neutral.500"
            fill="neutral.500"
          >
            {<LeftIcon />}
          </InputLeftElement>
        ) : null}
        <Input
          w="100%"
          type={type}
          placeholder={placeholder}
          variant="brand"
          borderColor={error ? "secondary.600" : null}
          {...register(name, { required })}
          defaultValue={defaultValue}
          bg="bg.subtle"
          px={LeftIcon ? "32px" : null}
        />
      </InputGroup>

      <Collapse in={error ? true : false} style={{ width: "100%" }}>
        <Text
          w="100%"
          color="secondary.600"
          fontSize="13px"
          px="13px"
          textAlign="start"
          py="4px"
        >
          {/* {error?.type} */}
          Шаардлагатай
        </Text>
      </Collapse>
    </VStack>
  );
};

export default FormInput;
