import useAppConfig from "@/context/appContext";
import useAuth from "@/context/authContext";
import { HStack, IconButton } from "@chakra-ui/react";
import { useMemo } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineBell, HiOutlineStar, HiOutlineUsers } from "react-icons/hi2";

const AppMenus = () => {
  const { setAppConfig } = useAppConfig();

  const appMenus = useMemo(
    () => [
      {
        icon: HiOutlineMenu,
        label: "menu",
        onClick: () => setAppConfig("menuOpen", true),
      },
      // {
      //   icon: HiOutlineBell,
      //   label: "bell",
      //   onClick: () => setAppConfig("notificationsOpen", true),
      // },
      // {
      //   icon: HiOutlineStar,
      //   label: "stars",
      // },
      // {
      //   icon: HiOutlineUsers,
      //   label: "users",
      // },
    ],
    []
  );
  return (
    <HStack spacing="16px">
      {appMenus?.map((el, idx) => (
        <IconButton
          variant="icon"
          minH="unset"
          icon={<el.icon />}
          aria-label={el.label}
          key={el.label}
          onClick={el?.onClick ?? undefined}
        />
      ))}
    </HStack>
  );
};

export default AppMenus;
