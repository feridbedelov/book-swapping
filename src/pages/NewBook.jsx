import { BookForm } from "../components/BookForm";
import "../styles/newBook.scss";
import { post } from "../server/utils";
import { apiUrls } from "../server/urlConfig";
import { imageBaseUrl } from "../consts";
import { queryClient } from "../contexts";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const NewBook = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const initialValues = {
    title: "",
    author: "",
    pageNum: "",
    description: "",
    condition: "",
    imageFile: "",
  };

  const onSubmitHandler = async (values) => {
    setLoading(true);
    const requestData = values;
    const image = requestData.imageFile;
    delete requestData.imageFile;

    const formData = new FormData();
    formData.append("file", image, image.name);

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await post(apiUrls.bookUploadImage, formData, options);
      const imagePath = `${imageBaseUrl}/${response.fileName}`;
      await post(apiUrls.book, { ...requestData, imagePath });
      await queryClient.invalidateQueries("my-books");
      // Show Success Notification (toast)
      history.push("/my-books");
    } catch (error) {
      // Show Error Notification (toast)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-book-container">
      <h2 className="title">Add New Book</h2>
      <div className="hr" />
      <BookForm
        initialValues={initialValues}
        loading={loading}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
