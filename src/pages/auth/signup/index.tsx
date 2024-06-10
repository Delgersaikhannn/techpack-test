import SignupDomain from "@/domains/auth/signup";
import AuthLayout from "@/layout/authLayout";
import { ReactElement } from "react";

const SignUpPage = () => {
  return <SignupDomain />;
};

SignUpPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default SignUpPage;
