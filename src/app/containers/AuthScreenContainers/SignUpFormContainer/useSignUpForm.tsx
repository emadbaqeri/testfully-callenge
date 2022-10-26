import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";

import { OnSubmitType } from "../../../types";
import { FormErrorMessages } from "../../../utils";

export interface SignUpFormFields {
  email: string;
  fullname: string;
  password: string;
  repeatpassword: string;
}

const signUpFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(FormErrorMessages.INVALID_EMAIL_ADDRESS)
    .required(FormErrorMessages.REQUIRED_FIELD),
  fullname: Yup.string().max(64).required(FormErrorMessages.REQUIRED_FIELD),
  password: Yup.string()
    .min(4, FormErrorMessages.INVALID_PASSWORD_LENGTH)
    .required(FormErrorMessages.REQUIRED_FIELD),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref("password")], FormErrorMessages.PASSWORDS_DO_NOT_MATCH)
    .required(FormErrorMessages.REQUIRED_FIELD),
});

export const useSignUpForm = (
  onSubmit: OnSubmitType<SignUpFormFields>
): FormikProps<SignUpFormFields> => {
  return useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: signUpFormValidationSchema,
    onSubmit: (values) => onSubmit(values),
  });
};
