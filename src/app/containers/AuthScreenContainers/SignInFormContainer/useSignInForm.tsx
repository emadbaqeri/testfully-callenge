import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";

import { OnSubmitType } from "../../../types";
import { FormErrorMessages } from "../../../utils";

export interface SignInFormFields {
  email: string;
  password: string;
}

export const signInFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(FormErrorMessages.INVALID_EMAIL_ADDRESS)
    .required(FormErrorMessages.REQUIRED_FIELD),
  password: Yup.string()
    .min(4, FormErrorMessages.INVALID_PASSWORD_LENGTH)
    .required(FormErrorMessages.REQUIRED_FIELD),
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
