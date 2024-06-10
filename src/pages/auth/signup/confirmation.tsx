import EmailConfirmPage from "@/domains/auth/signup/childSteps/emailConfirmPage";
import AuthLayout from "@/layout/authLayout";
import { ReactElement } from "react";

const EmailConfirmation = () => {
  return <EmailConfirmPage />;
};

EmailConfirmation.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default EmailConfirmation;
