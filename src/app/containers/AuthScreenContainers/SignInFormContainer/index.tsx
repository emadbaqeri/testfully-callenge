import React from "react";

import { OnSubmitType } from "../../../types";
import { Section, Row } from "../../../layouts";
import { Input, Link, Button } from "../../../components";
import { SignInFormFields, useSignInForm } from "./useSignInForm";

interface SignInFormContainerProps {
  onSubmit: OnSubmitType<SignInFormFields>;
}

export const SignInFormContainer: React.FC<SignInFormContainerProps> = ({
  onSubmit,
}) => {
  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useSignInForm(onSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <Section id="signin-form-container" className="mt-2 px-10 w-full">
        <Input
          id="email"
          name="email"
          type="email"
          aria-label="Email"
          className=""
          label="Email"
          required
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          value={values.email}
        />
        <Input
          name="password"
          id="password"
          aria-label="Password"
          label="Password"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          type="password"
          touched={touched.password}
          value={values.password}
        />
      </Section>
      <Row className="gap-3 pb-8 px-10 items-center mt-6">
        <Link className="w-1/2" href="/#">
          Reset your password
        </Link>
        <Button
          type="submit"
          className="w-1/2 focus:border-0 px-4 py-2 bg-emerald-500 focus:border-white focus:ring-0 focus:ring-blue-500 focus:shadow-button"
        >
          Sign In
        </Button>
      </Row>
    </form>
  );
};

export * from "./useSignInForm";
