import FormInput from "@/components/common/formInput";
import {
  Button,
  Checkbox,
  Collapse,
  HStack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiOutlineKey, HiOutlineUser } from "react-icons/hi2";
import OR from "./or";
import GoogleButton from "@/components/auth/googleButton";
import FbButton from "@/components/auth/fbButton";
import { PasswordChecker, isPasswordValid } from "./passwordChecker";
import { useState } from "react";
import useAuth from "@/context/authContext";
import { useRouter } from "next/router";

const formFields = [
  {
    label: "Имэйл хаяг",
    name: "email",
    type: "email",
    required: true,
    placeholder: "Хэрэглэгчийн нэр",
    LeftIcon: HiOutlineUser,
  },
  {
    label: "Нууц үг",
    type: "password",
    required: true,
    name: "password",
    placeholder: "Нэвтрэх нууц үг үүсгэнэ үү",
    LeftIcon: HiOutlineKey,
  },
  {
    label: "Нууц үг давтах",
    type: "password",
    required: true,
    name: "password_repeat",
    placeholder: "Нэвтрэх нууц үг давтана уу",
    LeftIcon: HiOutlineKey,
  },
];

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const { supabaseClient } = useAuth();
  const passwordValue = watch("password");
  const passwordrepValue = watch("password_repeat");

  const toast = useToast();
  const router = useRouter();

  const handleSignIn = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await supabaseClient?.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (res?.data?.user) {
        toast({ description: "OTP email sent.", status: "success" });
        router.push("/auth/signup/confirmation", {
          query: { email: data?.email },
        });
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    if (!isPasswordValid(passwordValue)) return;
    handleSignIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <VStack w="100%" spacing="20px">
        {formFields.map((field) => (
          <VStack
            key={field.label}
            w="100%"
            spacing="5px"
            alignItems={"flex-start"}
          >
            <FormInput
              {...field}
              register={register}
              error={errors[field.name]}
            />
            {field.name === "password" ? (
              <PasswordChecker password={passwordValue} />
            ) : null}
            {field.name === "password_repeat" ? (
              <Collapse
                in={
                  passwordValue !== passwordrepValue &&
                  passwordValue?.length >= 8
                    ? true
                    : false
                }
                style={{ width: "100%" }}
              >
                <Text
                  w="100%"
                  color="secondary.600"
                  fontSize="13px"
                  px="13px"
                  textAlign="start"
                  py="4px"
                >
                  Нууц үг таарсангүй.
                </Text>
              </Collapse>
            ) : null}
          </VStack>
        ))}

        {/* <VStack w="100%" spacing="0">
          <OR />
          <HStack w="100%" spacing="8px">
            <GoogleButton />
            <FbButton />
          </HStack>
        </VStack> */}
        <VStack w="100%" pt="10px">
          {/* <HStack w="100%">
            <Checkbox {...register("allow", { required: true })}>
              <span style={{ fontSize: "14px" }}>
                Үйлчилгээний нөхцөл хүлээн зөвшөөрч байна.
              </span>
            </Checkbox>
          </HStack> */}
          <HStack w="100%">
            <Collapse in={"allow" in errors}>
              <Text w="100%" fontSize="13px" color="secondary.600" px="13px">
                Шаардлагатай
              </Text>
            </Collapse>
          </HStack>
        </VStack>
        <HStack w="100%" pt="16px">
          <Button
            w="100%"
            variant="primary"
            type="submit"
            isLoading={isLoading}
          >
            Бүртгүүлэх
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};
export default SignupForm;
