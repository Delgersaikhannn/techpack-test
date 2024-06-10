import FormInput from "@/components/common/formInput";
import {
  Button,
  Checkbox,
  Collapse,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
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

const RowEditor = ({ data, refresh }: { data: any; refresh: any }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm({
    defaultValues: data,
  });

  const { supabaseClient, user } = useAuth();
  const passwordValue = watch("password");
  const passwordrepValue = watch("password_repeat");

  const toast = useToast();
  const router = useRouter();

  const handleSignIn = async (values: any) => {
    try {
      if (supabaseClient) {
        setIsLoading(true);

        const res = await supabaseClient
          .from("forms")
          .update({ ...values, updated_at: new Date() })
          .eq("id", data?.id);

        console.log(res);

        if (res?.error) {
          toast({ description: res.error.message, status: "error" });
          setIsLoading(false);
          return;
        }

        toast({
          description: "Successfully updated your form",
          status: "success",
        });
        onClose();
        refresh && refresh();

        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    handleSignIn(data);
  };

  return (
    <>
      <Button variant="primary" onClick={onOpen}>
        Засах
      </Button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Анкет засах
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <VStack minW={["unset", null, "400px", null]}>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default RowEditor;
