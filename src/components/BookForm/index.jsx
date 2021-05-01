import { Form, Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./index.scss";

const initialValues = {
  title: "",
  author: "",
  pageSize: "",
  tags: "",
  description: "",
  image: "",
};

export const BookForm = () => {
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmitHandler(values)}
      >
        {({ setFieldValue }) => (
          <Form className="book-form">
            <div className="row">
              <div className="col-6 text-white">
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
                  <label className="mb-0"> Page Size </label>
                  <Field
                    className="form-control"
                    name="pageSize"
                    placeholder="Enter the page size"
                  />
                  <ErrorMessage
                    component="div"
                    className="error-msg"
                    name="pageSize"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-0"> Tags </label>
                  <Field
                    className="form-control"
                    name="tags"
                    placeholder="Enter the relevant tags with comma"
                  />
                  <ErrorMessage
                    component="div"
                    className="error-msg"
                    name="tags"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-0"> Description </label>
                  <Field
                    as="textarea"
                    style={{ height: 150 }}
                    className="form-control"
                    name="description"
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
                  <Field name="image">
                    {() => (
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(event) =>
                          setFieldValue("file", event.currentTarget.files[0])
                        }
                      />
                    )}
                  </Field>

                  <ErrorMessage
                    component="div"
                    className="error-msg"
                    name="description"
                  />
                </div>
                <button className=" btn btn-outline-light" type="submit">
                  Save
                </button>
                <Link
                  to="/my-books"
                  className=" btn btn-secondary ml-2"
                  type="button"
                >
                  Cancel
                </Link>
              </div>

              <div className="col-6"></div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
