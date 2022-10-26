import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";

import { OnSubmitType } from "../../../types";

export interface SignInFormFields {
  email: string;
  password: string;
}

export const signInFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Field could not be blank"),
  password: Yup.string()
    .min(4, "Must be at least 4 characters")
    .required("Feild could not be blank"),
});

export const useSignInForm = (
  onSubmit: OnSubmitType<SignInFormFields>
): FormikProps<SignInFormFields> => {
  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInFormValidationSchema,
    onSubmit: (values) => onSubmit(values),
  });
};
