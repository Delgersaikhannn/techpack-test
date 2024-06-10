import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const headerNavs = [
  {
    label: "Цэвэрлэгээ",
    path: "cleanse",
  },
  {
    label: "Арчилгаа",
    path: "cleanse",
  },
  {
    label: "Тос",
    path: "cleanse",
  },
  {
    label: "Маск",
    path: "cleanse",
  },
  {
    label: "Бусад",
    path: "cleanse",
  },
  {
    label: "Багц",
    path: "cleanse",
  },
];

const HeaderNavs = () => {
  return (
    <HStack w="100%" justifyContent="center" spacing="44px" minH="44px">
      {headerNavs?.map((el, idx) => (
        <Link href={el.path} key={el.label}>
          <Text
            color="text.dark"
            fontSize="12px"
            fontWeight={400}
            className="nav"
          >
            {el.label}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default HeaderNavs;
