import * as yup from "yup";
import { SUPPORTED_FORMATS } from "../consts";

export const bookSchema = yup.object().shape({
  title: yup
    .string()
    .required("Required")
    .min(2, "Min 2 chars")
    .max(100, "Max 100 chars"),
  author: yup
    .string()
    .required("Required")
    .min(2, "Min 2 chars")
    .max(100, "Max 100 chars"),
  description: yup
    .string()
    .required("Required")
    .min(15, "Min 15 chars")
    .max(250, "Max 250 chars"),
  pageNum: yup.number().required("Required"),
  condition: yup
    .string()
    .required()
    .oneOf(["New", "Good", "Poor"], "Only supported words"),
  // imageFile: yup
  //   .mixed()
  //   .test("fileSize", "File Size is too large", (value) => value.size <= 200000)
  //   .test("fileType", "Unsupported File Format", (value) =>
  //     SUPPORTED_FORMATS.includes(value.type)
  //   ),
});
