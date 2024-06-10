import FormInput from "@/components/common/formInput";
import useAuth from "@/context/authContext";
import {
  Button,
  Checkbox,
  Collapse,
  HStack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineKey, HiOutlineUser } from "react-icons/hi2";

const formFields = [
  {
    label: "Имэйл хаяг",
    name: "email",
    type: "email",
    required: true,
    placeholder: "Хэрэглэгчийн и-мэйл хаяг",
    LeftIcon: HiOutlineUser,
  },
  {
    label: "Нууц үг",
    type: "password",
    required: true,
    name: "password",
    placeholder: "Нэвтрэх нууц үг",
    LeftIcon: HiOutlineKey,
  },
];

const LoginForm = () => {
  const { supabaseClient, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await supabaseClient?.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (res?.error?.message) {
        toast({ status: "error", description: res?.error?.message });
      }

      if (res?.data?.user) {
        toast({ status: "success", description: "Successfully logged in." });
        setUser(res?.data?.user);
        router.push("/");
      }

      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <VStack w="100%" spacing="20px">
        {formFields.map((field) => (
          <VStack key={field.label} w="100%" spacing="5px" alignItems={"unset"}>
            <FormInput
              {...field}
              register={register}
              error={errors[field.name]}
            />
          </VStack>
        ))}
        <VStack w="100%">
          <HStack w="100%" justifyContent="flex-end" color="neutral.700">
            {/* <Checkbox {...register("remember", { required: false })}>
              <span style={{ fontSize: "14px" }}>Намайг сана </span>
            </Checkbox> */}
            <Link href="/auth/forgot">
              <Text fontSize="14px">Нууц үг мартсан?</Text>
            </Link>
          </HStack>
          {/* <HStack w="100%">
            <Collapse in={"remember" in errors}>
              <Text w="100%" fontSize="13px" color="secondary.600" px="13px">
                Шаардлагатай
              </Text>
            </Collapse>
          </HStack> */}
        </VStack>
        <HStack w="100%">
          <Button
            w="100%"
            variant="primary"
            type="submit"
            isLoading={isLoading}
          >
            Нэвтрэх
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};
export default LoginForm;
