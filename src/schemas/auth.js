import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required field"),
  password: yup
    .string()
    .required("Required field")
    .min(8, "Should be 8 chars min"),
});
