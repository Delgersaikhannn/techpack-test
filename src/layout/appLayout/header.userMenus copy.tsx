import useAppConfig from "@/context/appContext";
import useAuth from "@/context/authContext";
import {
  Avatar,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { HiOutlineLogout, HiOutlineMenu } from "react-icons/hi";
import {
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

const Profile = () => {
  const { user, supabaseClient, setUser } = useAuth();
  const router = useRouter();
  const logout = async () => {
    const res = await supabaseClient?.auth.signOut();
    setUser(null);
    router.push("/auth");
  };
  return (
    <Menu size="sm">
      <MenuButton>
        <Avatar name={user?.email} size="sm" />
      </MenuButton>
      <MenuList>
        <VStack w="100%" pt="14px">
          <VStack
            w="100%"
            alignItems="flex-start"
            px="12px"
            spacing="4px"
            pb="10px"
          >
            <Text fontSize="12px" opacity="0.5">
              Таны бүртгэл
            </Text>
            <Text fontSize="14px" w="100%" textAlign="left">
              {user?.email}
            </Text>
          </VStack>

          <MenuItem onClick={() => router.push("/me")}>
            <MenuIcon pr="10px">
              <HiOutlineUser strokeWidth="2px" />
            </MenuIcon>
            Миний хуудас
          </MenuItem>
          <MenuItem onClick={logout}>
            <MenuIcon pr="10px">
              <HiOutlineLogout />
            </MenuIcon>
            Системээс гарах
          </MenuItem>
        </VStack>
      </MenuList>
    </Menu>
  );
};

const UserMenus = () => {
  const { setAppConfig } = useAppConfig();
  const router = useRouter();

  const { user } = useAuth();

  const authNav = () => {
    if (user?.email) return;
    router.push("/auth");
  };
  const userMenus = useMemo(
    () => [
      // {
      //   icon: HiOutlineMagnifyingGlass,
      //   label: "search",
      //   onClick: () => setAppConfig("searchOpen", true),
      // },
      // {
      //   icon: HiOutlineHeart,
      //   label: "heart",
      // },
      // {
      //   icon: HiOutlineShoppingBag,
      //   label: "bag",
      //   onClick: () => setAppConfig("cartOpen", true),
      // },
      {
        icon: user?.email ? Profile : HiOutlineUser,
        variant: user?.email ? "icon_noAnim" : "icon",
        label: "user",
        onClick: () => authNav(),
      },
    ],
    [user]
  );
  return (
    <HStack spacing="16px">
      {userMenus?.map((el, idx) => (
        <IconButton
          variant={el.variant ?? "icon"}
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

export default UserMenus;
