import ForgotPassPage from "@/domains/auth/forgot";
import AuthLayout from "@/layout/authLayout";
import { ReactElement } from "react";

const ForgotPass = () => {
  return <ForgotPassPage />;
};

ForgotPass.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default ForgotPass;
