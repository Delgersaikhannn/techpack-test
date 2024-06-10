import FormInput from "@/components/common/formInput";
import useAuth from "@/context/authContext";
import { Button, HStack, Text, VStack, useToast } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

const ForgotForm = ({
  setHasSuccess,
}: {
  setHasSuccess: Dispatch<SetStateAction<boolean>>;
}) => {
  const { supabaseClient } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const pathname = usePathname();

  const toast = useToast();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await supabaseClient?.auth.resetPasswordForEmail(
        data?.email,
        { redirectTo: `${window?.location.origin}/me/password` }
      );

      if (res?.error?.message) {
        toast({ status: "error", description: res?.error?.message });
        return;
      }

      if (res?.data) {
        console.log("res", res);
        setHasSuccess(true);
        toast({ status: "success", description: "Successfully logged in." });
      }

      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <VStack w="100%" spacing="16px" alignItems={"unset"} pt="32px">
        <FormInput
          label=""
          placeholder="И-мэйл ээ оруулна уу..."
          name="email"
          LeftIcon={HiOutlineMail}
          required={true}
          register={register}
          error={errors["email"]}
        />
        <HStack w="100%">
          <Button
            w="100%"
            variant="primary"
            type="submit"
            isLoading={isLoading}
          >
            Үргэлжлүүлэх
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default ForgotForm;
