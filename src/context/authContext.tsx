import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { AUTH_ENUMS } from "@/types/enums";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  supabaseClient: SupabaseClient | null;
};

const AuthContext = createContext<AuthState | null>(null);

const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Error on auth context...");
  }

  return context;
};

export const AuthProvider = (props: PropsWithChildren) => {
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);

  const handleUser = async (supabseClient: SupabaseClient) => {
    const res = await supabseClient?.auth.getUser();

    console.log("res?.data", res?.data);
    if (res?.data.user) {
      setUser(res?.data.user);
    }
  };

  useEffect(() => {
    const supabase = createClientComponentClient({
      supabaseKey: process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: process?.env?.NEXT_PUBLIC_SUPABASE_URL,
    });
    setSupabaseClient(supabase);

    handleUser(supabase);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, supabaseClient }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default useAuth;
