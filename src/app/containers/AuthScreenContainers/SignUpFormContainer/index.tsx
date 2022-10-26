import React from "react";

import { OnSubmitType } from "../../../types";
import { Section, Row } from "../../../layouts";
import { Input, Button } from "../../../components";
import { SignUpFormFields, useSignUpForm } from "./useSignUpForm";

interface SignUpFormContainerProps {
  onSubmit: OnSubmitType<SignUpFormFields>;
}

export const SignUpFormContainer: React.FC<SignUpFormContainerProps> = ({
  onSubmit,
}) => {
  const { errors, handleChange, handleBlur, touched, values, handleSubmit } =
    useSignUpForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Section id="signup-form-container" className="mt-2 px-10 w-full">
        <Input
          id="fullname"
          type="text"
          name="fullname"
          aria-label="Full name"
          label="Full name"
          required
          error={errors.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.fullname}
          value={values.fullname}
        />
        <Input
          name="email"
          id="email"
          type="email"
          aria-label="email"
          label="Email"
          required
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.email}
          value={values.email}
        />
        <Input
          id="password"
          name="password"
          aria-label="password"
          type="password"
          label="Password"
          required
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.password}
          value={values.password}
        />
        <Input
          name="repeatpassword"
          id="repeat-password"
          aria-label="Repeat Password"
          type="password"
          label="Repeat Password"
          required
          error={errors.repeatpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.repeatpassword}
          value={values.repeatpassword}
        />
      </Section>

      <Row className="gap-3 pb-8 px-10 items-center justify-end mt-6">
        <Button
          type="submit"
          className="w-1/2 focus:border-0 px-4 py-2 bg-emerald-500 focus:border-white focus:ring-0 focus:ring-blue-500 focus:shadow-button"
        >
          Sign Up
        </Button>
      </Row>
    </form>
  );
};

export * from "./useSignUpForm";
