import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { BookForm } from "../components/BookForm";
import { FullPageSpinner } from "../components/Spinner/FullPageSpinner";
import { queryClient } from "../contexts";
import { apiUrls } from "../server/urlConfig";
import { post, put } from "../server/utils";
import { fetchSingleBook } from "../services/book.provider";
import "../styles/bookEdit.scss";

export const BookEdit = ({ match, history }) => {
  const id = match?.params?.id;
  const [onSubmitLoading, setOnSubmitLoading] = useState(false);

  const {
    data: bookDetails,
    isLoading,
    isError,
  } = useQuery(["book", id], () => fetchSingleBook(id));

  const onSubmitHandler = async (values) => {
    setOnSubmitLoading(true);
    const requestData = values;
    const image = requestData.imageFile;
    delete requestData.imageFile;

    try {
      if (image) {
        const formData = new FormData();
        formData.append("file", image, image.name);
        const options = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await post(apiUrls.bookUploadImage, formData, options);
        const imagePath = `${response.fileName}`;
        await put(`${apiUrls.book}/${bookDetails?.id}`, {
          ...requestData,
          imagePath,
        });
      } else {
        await put(`${apiUrls.book}/${bookDetails?.id}`, { ...requestData });
      }

      await queryClient.invalidateQueries("my-books");
      toast.success("Successfully updated");
      setOnSubmitLoading(false);
      history.push("/my-books");
    } catch (error) {
      toast.error("Server error");
      console.log(error);
      setOnSubmitLoading(false);
    }
  };

  if (isLoading) return <FullPageSpinner />;

  if (isError) return <p>Server Error</p>;

  return (
    <div className="new-book-container">
      <h2 className="title">Edit the book</h2>
      <div className="hr" />
      <BookForm
        onSubmit={onSubmitHandler}
        loading={onSubmitLoading}
        initialValues={{
          ...bookDetails,
          imageFile: "",
          condition: "",
        }}
      />
    </div>
  );
};
