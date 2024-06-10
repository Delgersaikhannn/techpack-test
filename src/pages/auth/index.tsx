import LoginDomain from "@/domains/auth/login";
import AuthLayout from "@/layout/authLayout";
import { ReactElement } from "react";

const LoginPage = () => {
  return <LoginDomain />;
};

LoginPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;
