import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppConfig {
  authModalOpen: boolean;
  cartOpen: boolean;
  searchOpen: boolean;
  menuOpen: boolean;
  notificationsOpen: boolean;
}

type AppConfigState = {
  appConfig: AppConfig;
  setAppConfig(key: keyof AppConfig, value: boolean): void;
};

const AppConfigContext = createContext<AppConfigState | null>(null);

const useAppConfig = (): AppConfigState => {
  const context = useContext(AppConfigContext);

  if (!context) {
    throw new Error("app context not found...");
  }

  return context;
};

export const AppConfigProvider = (props: PropsWithChildren) => {
  const [appConfig, _setAppConfig] = useState<AppConfig>({
    authModalOpen: false,
    cartOpen: false,
    searchOpen: false,
    menuOpen: false,
    notificationsOpen: false,
  });

  const setAppConfig = async (key: keyof AppConfig, value: boolean) => {
    let tmp = { ...appConfig };
    tmp[key] = value;
    _setAppConfig(tmp);
  };

  return (
    <AppConfigContext.Provider value={{ appConfig, setAppConfig }}>
      {props.children}
    </AppConfigContext.Provider>
  );
};

export default useAppConfig;
