import { PropsWithChildren } from "react";
import { AuthProvider } from "./authContext";
import { AppConfigProvider } from "./appContext";

const ContextWrapper = (props: PropsWithChildren) => {
  // ene iig wrapplaad busad contextuuda oruulah
  return (
    <AuthProvider>
      <AppConfigProvider>{props.children}</AppConfigProvider>
    </AuthProvider>
  );
};

export default ContextWrapper;
