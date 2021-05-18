import { Form, Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./index.scss";
import { ImageUpload } from "../FileUpload";
import { Spinner } from "../Spinner/Spinner";
import { bookSchema } from "../../schemas/book";

export const BookForm = ({ onSubmit, loading, initialValues }) => {
  const onSubmitHandler = async (values) => {
    await onSubmit(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmitHandler(values)}
        validationSchema={bookSchema}
      >
        {({ setFieldValue, values }) => {
          return (
            <Form className="book-form">
              <div className="row text-white">
                <div className="col-6 ">
                  <div className="form-group">
                    <label className="mb-0"> Title </label>
                    <Field
                      className="form-control"
                      name="title"
                      placeholder="Enter the title"
                    />
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="title"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-0"> Author </label>
                    <Field
                      className="form-control"
                      name="author"
                      placeholder="Enter the author"
                    />
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="author"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-0"> Page Number </label>
                    <Field
                      className="form-control"
                      name="pageNum"
                      placeholder="Enter the page number"
                    />
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="pageNum"
                    />
                  </div>
                  <div className="form-group">
                    <div className="mb-0"> Condition </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        className="form-check-input"
                        id="inlineRadio1"
                        name="condition"
                        value="New"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        New
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        className="form-check-input"
                        id="inlineRadio2"
                        name="condition"
                        value="Good"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Good
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        className="form-check-input"
                        id="inlineRadio3"
                        name="condition"
                        value="Poor"
                      />
                      <label className="form-check-label" for="inlineRadio3">
                        Poor
                      </label>
                    </div>
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="condition"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-0"> Description </label>
                    <Field
                      as="textarea"
                      style={{ height: 115 }}
                      className="form-control"
                      name="description"
                      maxLength="250"
                      placeholder="Enter the description"
                    />
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="description"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-0"> Image </label>
                    <ImageUpload
                      value={values?.imageFile?.name || ""}
                      name="imageFile"
                      onChange={(event) =>
                        setFieldValue(
                          "imageFile",
                          event?.currentTarget?.files[0]
                        )
                      }
                    />
                    <ErrorMessage
                      component="div"
                      className="error-msg"
                      name="imageFile"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      disabled={loading}
                      className=" btn btn-outline-light"
                      type="submit"
                    >
                      {loading ? <Spinner /> : "Save"}
                    </button>
                    <Link
                      disabled={loading}
                      to="/my-books"
                      className=" btn btn-secondary ml-2"
                      type="button"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
