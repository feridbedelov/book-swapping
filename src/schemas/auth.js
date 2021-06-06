import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required field"),
  password: yup
    .string()
    .required("Required field")
    .min(4, "Can't be less than 4 chars")
    .max(40, "Can't be longer than 40 chars")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,40}$/,
      "At least a letter and a digit"
    ),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required field"),
  password: yup
    .string()
    .required("Required field")
    .min(4, "Can't be less than 4 chars")
    .max(40, "Can't be longer than 40 chars")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,40}$/,
      "At least a letter and a digit"
    ),
  fullName: yup
    .string()
    .required("Required field")
    .min(4, "Can't be less than 4 chars")
    .max(40, "Can't be longer than 40 chars"),
  phone: yup
    .string()
    .required("Required field")
    .matches(
      /^((\+)?994(\s)?)?(5[015]|7[07])(\s)?([0-9]{3})(\s)?([0-9]{2})(\s)?([0-9]{2})$/,
      "Invalid format"
    ),
  address: yup
    .string()
    .required("Required field")
    .min(10, "Can't be less than 10 chars")
    .max(100, "Can't be longer than 100 chars"),
});
