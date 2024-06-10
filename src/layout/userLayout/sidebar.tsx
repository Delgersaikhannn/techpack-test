import { HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi2";

const menus = [
  {
    path: "/me/",
    label: "Миний формууд",
    icon: HiOutlineUser,
  },
  {
    path: "/me/password/",
    label: "Нууц үг солих",
    icon: HiOutlineLockClosed,
  },
];
const UserSideBar = () => {
  const pathname = usePathname();

  return (
    <VStack
      //   maxW={"300px"}
      //   minW="300px"

      px="10px"
      alignItems="flex-start"
      py="24px"
      spacing="6px"
      flex={1}
      w="max-content"
    >
      {menus?.map((el, idx) => (
        <Link href={el.path} key={el.path} style={{ width: "100%" }}>
          <HStack
            pl="16px"
            pr="20px"
            w="100%"
            py="6px"
            borderRadius="6px"
            className={`user-sidebar ${
              pathname === el.path
                ? "user-sidebar--active"
                : "user-sidebar--inactive"
            }`}
          >
            <el.icon className="user-sidebar-icon" />
            <Text w="max-content" fontWeight={400} fontSize="14px">
              {el.label}
            </Text>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
};

export default UserSideBar;
