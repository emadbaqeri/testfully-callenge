import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";

import { OnSubmitType } from "../../../types";

export interface SignUpFormFields {
  email: string;
  fullname: string;
  password: string;
  repeatpassword: string;
}

const signUpFormValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Field could not be blank"),
  fullname: Yup.string().max(64).required("Field could not be blank"),
  password: Yup.string()
    .min(4, "Must be at least 4 characters")
    .required("Field could not be blank"),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref("password")], "You didn’t repeat the password correctly.")
    .required("Field could not be blank"),
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
