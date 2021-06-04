import * as yup from "yup";

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
    .required("Required")
    .oneOf(["New", "Good", "Poor"], "Only supported words"),
  imageFile: yup.mixed().test("required", "Required", function (value) {
    if (this.parent?.imagePath || value) {
      return true;
    } else {
      return false;
    }
  }),
});
