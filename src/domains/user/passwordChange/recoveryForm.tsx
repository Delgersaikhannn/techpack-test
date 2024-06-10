import FormInput from "@/components/common/formInput";
import useAuth from "@/context/authContext";
import { Button, HStack, VStack, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

const RecoveryForm = () => {
  const { supabaseClient } = useAuth();
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

      const res = await supabaseClient?.auth.updateUser({
        password: data?.password,
      });

      console.log("res", res);
      if (res?.error?.message) {
        toast({ status: "error", description: res?.error?.message });
      }

      if (res?.data) {
        console.log("res", res);
        toast({ status: "success", description: "Амжилттай солигдлоо" });
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
      <VStack w="100%" spacing="5px" alignItems={"unset"}>
        <FormInput
          label="Шинэ нууц үг"
          placeholder="Шинэ нууц үг ээ оруулна уу..."
          name="password"
          LeftIcon={HiOutlineMail}
          required={true}
          register={register}
          type="password"
          error={errors["password"]}
        />
        <HStack w="100%">
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
  );
};

export default RecoveryForm;
