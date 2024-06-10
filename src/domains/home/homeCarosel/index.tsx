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
import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice,
  HiOutlineIdentification,
  HiOutlineKey,
  HiOutlineUser,
} from "react-icons/hi2";
import GoogleButton from "@/components/auth/googleButton";
import FbButton from "@/components/auth/fbButton";
import { useState } from "react";
import useAuth from "@/context/authContext";
import { useRouter } from "next/router";
import Link from "next/link";

const formFields = [
  {
    label: "Овог",
    name: "last_name",
    type: "text",
    required: true,
    placeholder: "Таны овог",
    LeftIcon: HiOutlineUser,
  },
  {
    label: "Нэр",
    name: "first_name",
    type: "text",
    required: true,
    placeholder: "Таны нэр",
    LeftIcon: HiOutlineUser,
  },
  {
    label: "Мэргэжил",
    type: "text",
    required: true,
    name: "profession",
    placeholder: "Хуульч...",
    LeftIcon: HiOutlineIdentification,
  },
  {
    label: "Төгссөн сургууль",
    type: "text",
    required: true,
    name: "university_name",
    placeholder: "Их сургууль...",
    LeftIcon: HiOutlineBuildingOffice,
  },
  {
    label: "Ажлын туршлага",
    type: "text",
    required: true,
    name: "experience_yrs",
    placeholder: "eg: 3",
    LeftIcon: HiOutlineAcademicCap,
  },
];

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm();

  const { supabaseClient, user } = useAuth();
  const passwordValue = watch("password");
  const passwordrepValue = watch("password_repeat");

  const toast = useToast();
  const router = useRouter();

  const handleSignIn = async (data: any) => {
    try {
      setIsLoading(true);

      const res = await supabaseClient
        ?.from("forms")
        .insert({ ...data, user_email: user?.email });

      console.log(res);

      if (res?.error) {
        toast({ description: res.error.message, status: "error" });
        setIsLoading(false);
        return;
      }

      toast({ description: "Successfully saved your form", status: "success" });
      reset();

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    handleSignIn(data);
  };

  if (!user)
    return (
      <VStack minW={["unset", null, "400px", null]}>
        <Text fontSize="24px" pb="24px" fontWeight={600}>
          Та нэвтэрч орсоны дараагаар анкет бөглөх боломжтой
        </Text>
        <Link href="/auth">
          <Button variant="primary">Нэвтрэх</Button>
        </Link>
      </VStack>
    );

  return (
    <VStack minW={["unset", null, "400px", null]}>
      <Text fontSize="24px" pb="24px" fontWeight={600}>
        Анкет оруулах
      </Text>
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
          <HStack w="100%" pt="16px">
            <Button
              w="100%"
              variant="primary"
              type="submit"
              isLoading={isLoading}
            >
              Хадгалах
            </Button>
          </HStack>
        </VStack>
      </form>
    </VStack>
  );
};
export default SignupForm;
