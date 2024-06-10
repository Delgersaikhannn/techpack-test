import useAppConfig from "@/context/appContext";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

const CartSideBar = () => {
  const { appConfig, setAppConfig } = useAppConfig();

  const key = "cartOpen";

  const isOpen = appConfig[key];

  const onClose = () => {
    setAppConfig(key, false);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartSideBar;
