import { Text, VStack } from "@chakra-ui/react";

const checks = [
  {
    label: "Дор хаяж 1 тоо орох *",
    regex: /\d/, // Matches any digit
  },
  {
    label: "Дор хаяж 8-н оронтой байх *",
    regex: /.{8,}/, // Matches any string with 8 or more characters
  },
];

const isPasswordValid = (password: string) => {
  return !checks.map((check) => check.regex.test(password)).includes(false);
};

const PasswordChecker = ({ password }: { password: string }) => {
  const results = checks.map((check) => {
    const isValid = check.regex.test(password);
    return (
      <Text
        key={check.label}
        fontSize="10px"
        fontWeight={400}
        style={{ color: isValid ? "green" : "#9DAEB0" }}
      >
        {check.label}
      </Text>
    );
  });

  return (
    <VStack w="100%" alignItems="flex-start" px="10px" spacing="0">
      {results}
    </VStack>
  );
};

export { PasswordChecker, isPasswordValid };
